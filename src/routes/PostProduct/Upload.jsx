import { useState } from 'react';

import { Formik, Form } from 'formik';
import styled from 'styled-components';

import { ReactComponent as Image130 } from '../../assets/post/Group130.svg';

const UploadSection = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;

        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'darwin');
        console.log(data);
        setLoading(true);
        const res = await fetch('https://api.cloudinary.com/v1_1/dihifeicm/image/upload', {
            method: 'POST',
            body: data,
        });
        const file = await res.json();

        setImage(file.secure_url);
        setLoading(false);
        setTimeout(console.log(files), 5000);
    };
    return (
        <Formik
            initialValues={{
                profile: [],
            }}
            onSubmit={(values, props) => {
                let data = new FormData();
                values.profile.forEach((photo, index) => {
                    data.append(`avatar$`, values.profile[index]);
                    console.log('data', values.profile[index]);
                });
                // axios
                //     .post('you_api_for_file_upload', data, {
                //         headers: {
                //             'Content-Type': 'multipart/form-data',
                //         },
                //     })
                //     .then((response) => {
                //         console.log(response);
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     });
                console.log(data);
            }}
        >
            {(formik) => {
                return (
                    <>
                        <Form>
                            <input
                                className="input"
                                id="file"
                                name="profile"
                                type="file"
                                onChange={(event) => {
                                    const files = event.target.files;
                                    let myFiles = Array.from(files);
                                    formik.setFieldValue('profile', myFiles);
                                }}
                                multiple
                            ></input>
                            <Image130 style={{ position: 'absolute', top: '67%', left: '25%' }} />

                            <ButtonSubmit type="submit">
                                Đăng tải hình ảnh/ video tại đây
                            </ButtonSubmit>
                        </Form>
                    </>
                );
            }}
        </Formik>
    );
};
// <img src={}/>
// <img src={files} alt="" />

export default UploadSection;

// <ErrorMessage name="profile" />
export const ButtonSubmit = styled.button`
    background-color: transparent;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    position: absolute;
    top: 650px;
    left: 310px;
    color: #ffffff;
`;
