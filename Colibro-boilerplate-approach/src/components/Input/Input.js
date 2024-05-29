import { SearchOutlined, MailOutlined, LockOutlined, EyeInvisibleOutlined } from "@ant-design/icons";


export const Input = ({ label, placeholder, textArea, email, lock, eye, width, height, mr, mt, type,setTitle }) => {
    return (
        <div className='inputDiv'>
            {label && <p className='label'>{label}</p>}
            {label ?
                textArea ?
                    <textarea className='textArea' placeholder={placeholder}></textarea>
                    :
                    <div className='divInput'>
                        <input
                            type={type}
                            style={{
                                width: width,
                                height: height,
                                marginRight: mr,
                                marginTop: mt,
                            }}
                            className='inputLabel'
                            
                            placeholder={placeholder} />

                        {email && <MailOutlined className='iconEmail' />}
                        {lock && <LockOutlined className='iconEmail' />}
                        {eye && <EyeInvisibleOutlined className='iconEye' />}
                    </div>
                :
                <input
                    style={{
                        width: width,
                        height: height,
                        marginRight: mr,
                        marginTop: mt,
                    }}
                    onBlur={e=>setTitle(e.target.value)}
                    className='inputHeader' placeholder={placeholder}></input>
            }

            {!label && <SearchOutlined className='icon' />}
        </div>
    )
}