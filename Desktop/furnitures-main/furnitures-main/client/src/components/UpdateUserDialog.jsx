import React, { useEffect, useState } from 'react';
import { useAddUserItemMutation, useUpdateUserMutation } from '../features/user/UserApiSlice';
import { setToken } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import FromToken from './fromtoken';




const UpdateUserDialog = ({ user,refetch}) => {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(10.50);
    const [value3, setValue3] = useState(25);
    const [visible, setVisible] = useState(false);
    // const params = useParams();
    const location = useLocation();
    // console.log(location.state, "ppppppp")



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [updateUserFunc, { isError, error, isSuccess, data }] = useUpdateUserMutation()
    const [formData, setFormData] = useState({
        _id: user._id,
        userName: user.userName,
        name: user.name,
        password: '',
        email: user.email,
        phone: user.phone
    })

    useEffect(() => {
    }, [formData])
    useEffect(() => {
        // if (error) {
        // }
    }, [isError])

    // useEffect(() => {
    //     if (isSuccess)
    //         dispatch(setToken(data))
    // }, [isSuccess])

    // Function to handle form submission
    const handleUpdate = (e) => {
        e.preventDefault();
        updateUserFunc(formData)
        refetch()
        setVisible(false)

    };
    const handleCancle = () => {
        navigate("/")
    };



    return (
        <div className="card flex justify-content-center">
            <Button icon="pi pi-pencil" className="p-button-rounded" onClick={() => setVisible(true)}></Button>
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto">
                            <g mask="url(#mask0_2642_713)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="username" label="Username" defaultValue={formData.userName} className="bg-white-alpha-20 border-none p-3 text-primary-50"
                                onBlur={(e) => { setFormData({ _id: formData._id, userName: e.target.value, password: formData.password, name: formData.name, email: formData.email, phone: formData.phone }) }}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                password
                            </label>
                            <InputText id="password" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"
                                onBlur={(e) => { setFormData({ _id: formData._id, userName: formData.userName, password: e.target.value, name: formData.name, email: formData.email, phone: formData.phone }) }}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="name" className="text-primary-50 font-semibold">
                                name
                            </label>
                            <InputText id="name" label="name" defaultValue={formData.name} className="bg-white-alpha-20 border-none p-3 text-primary-50"
                                onBlur={(e) => { setFormData({ _id: formData._id, userName: formData.userName, password: formData.password, name: e.target.value, email: formData.email, phone: formData.phone }) }}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="email" className="text-primary-50 font-semibold">
                                email
                            </label>
                            <InputText id="email" label="email" defaultValue={formData.email} className="bg-white-alpha-20 border-none p-3 text-primary-50"
                                onBlur={(e) => { setFormData({ _id: formData._id, userName: formData.userName, password: formData.password, name: formData.name, email: e.target.value, phone: formData.phone }) }}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="phone" className="text-primary-50 font-semibold">
                                phone
                            </label>
                            <InputText id="phone" label="phone" defaultValue={formData.phone} className="bg-white-alpha-20 border-none p-3 text-primary-50"
                                onBlur={(e) => { setFormData({ _id: formData._id, userName: formData.userName, password: formData.password, name: formData.name, email: formData.email, phone: e.target.value }) }}></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="update" onClick={handleUpdate} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={handleCancle} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" ></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )

};
export default UpdateUserDialog;
