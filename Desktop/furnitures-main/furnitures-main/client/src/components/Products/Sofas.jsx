import { useGetProductsQuery } from '../../features/products/ProductApiSlice';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { useAddToCartMutation } from '../../features/user/UserApiSlice';

const Sofas = () => {

    const [prod, setProd] = useState(null)
    const [qty, setQty] = useState(1)

    const {
        data,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetProductsQuery();

    const [addToCart] = useAddToCartMutation()

    const handleAddToCart = (prod, qty) => {
        console.log({ prod, qty }, " prod qty");
        addToCart({ prod, qty, from: "addOne" })
    }

    useEffect(() => {
        console.log('data     ', data);
    }, [data]);

    useEffect(() => {
        console.log('error   ', error);
    }, [error]);

    useEffect(() => {
        console.log('load   ', isLoading);
    }, [isLoading]);

    const [layout, setLayout] = useState('grid');

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    const sofasgridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"></i>
                            <span className="font-semibold">{product.category}</span>
                        </div>
                        <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <div className="flex flex-column align-items-center gap-3 py-5" style={{ "height": "370px" }} >
                            <img className="w-9 shadow-2 border-round" src={product.image} alt={product.name} />
                        </div>
                        <div className="text-4xl font-bold">{product.name}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        {product.qty === 0 && (
                            <span className="out-of-stock-text" style={{ color: 'red', fontSize: '22px', fontWeight: 'bold', margin: '0 10px' }}>
                                Out of Stock
                            </span>
                        )}
                        <Button
                            icon="pi pi-cart-plus"
                            className="p-button-rounded"
                            disabled={product.qty === 0}
                            onClick={() => handleAddToCart(product._id, 1)}
                        />
                    </div>
                </div>
            </div>
        );
    };
    const itemTemplate = (product) => {
        if (!product) {
            return;
        }
        if (product.category === "sofa") return sofasgridItem(product);

    };

    const listTemplate = (data) => {
        return <div className="grid grid-nogutter">{data?.map((product) => itemTemplate(product))}</div>;
    };



    return (
        <div className="card">
            <DataView value={data} listTemplate={listTemplate} layout={layout} />
        </div>
    )
}

export default Sofas