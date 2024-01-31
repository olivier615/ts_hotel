import axios from 'axios'
import showSwal from '../libs/showSwal'
import { useForm } from 'react-hook-form';
import { TbCircleNumber1, TbCircleNumber2 } from "react-icons/tb";
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { Input } from '../components'
import {MyContext} from './memberLayout';
import { Register1Form } from '../interfaces/User'
import { Link } from 'react-router-dom'

const api = import.meta.env.VITE_API_LINK


const SignUpPage = () => {
  const Context = useContext(MyContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    // 錯誤驗證時機
    mode: 'onTouched',
  });
  const onSubmit = async (data: Register1Form) => {
    const { email, password, checkPassword } = data
    if (password !== checkPassword) {
      const message = '密碼不一致'
      showSwal(message, 'warning')
      return
    }
    const emailVerify = await axios.post(
      `${api}api/v1/verify/email`, {email}
    )
    if (emailVerify.data.result.isEmailExists) {
      const message = '此信箱已註冊過'
      showSwal(message, 'warning')
      return
    }
      Context.email = email
      Context.password = password
      navigate('/member/registerInfo')
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center loginPage">
          <div className="col-12 col-md-5">
            <div className="d-flex flex-column">
              <div className="mb-2 mb-md-4">
                <p className="text-primary">享樂酒店，誠摯歡迎</p>
                <p className="fs-1">立即註冊</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-md-5 mb-3">
                <div className="">
                  <div className="d-flex flex-column align-items-center">
                    <TbCircleNumber1 size={32}  style={{ color: '#BF9D7D' }} />
                    <p className="mt-1">輸入信箱及密碼</p>
                  </div>
                </div>
                <div className="border-bottom border-light" style={{width: '120px'}}></div>
                <div className="d-flex flex-column align-items-center">
                  <TbCircleNumber2 size={32} style={{ color: 'rgba(144, 144, 144, 1)' }} />
                  <p className="mt-1" style={{ color: 'rgba(144, 144, 144, 1)' }}>填寫基本資料</p>
                </div>
              </div>
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <Input
                  register={register}
                  errors={errors}
                  id="email"
                  labelText="電子信箱"
                  type="email"
                  placeholder="hello@exsample.com"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入 Email'
                    },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email 格式不正確'
                    }
                  }}
                />
                <Input
                  register={register}
                  errors={errors}
                  id="password"
                  labelText="密碼"
                  type="password"
                  placeholder="請輸入密碼"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入密碼'
                    },
                    minLength: {
                      value: 8,
                      message: '密碼至少需要 8 個字'
                    },
                    pattern: {
                      value: /^(?=.*[a-zA-Z])/,
                      message: '密碼需包含至少 1 個字母'
                    }
                  }}
                />
                <Input
                  register={register}
                  errors={errors}
                  id="checkPassword"
                  labelText="確認密碼"
                  type="password"
                  placeholder="請再次輸入密碼"
                  rules={{
                    required: {
                      value: true,
                      message: '請再次輸入密碼'
                    },
                    minLength: {
                      value: 6,
                      message: '密碼至少需要 6 個字'
                    }
                  }}
                />
                {/* <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input id="checkList1" type="checkbox"
                      className="form-check-input"
                      name="like" value='記住帳號' />
                    <label className='form-check-label text-light' htmlFor="checkList1">記住帳號</label>
                  </div>
                  <a href="" className="text-primary" style={{ textDecoration: 'underline' }}>忘記密碼?</a>
                </div> */}
                <div className="d-flex mt-5">
                  <button type="submit" className="btn btn-primary w-100">下一步</button>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <p>已經有會員了嗎？</p>
                  <Link to="/member" className="text-primary" style={{ textDecoration: 'underline' }}>立即登入</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage