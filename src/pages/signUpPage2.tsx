import axios from 'axios'
import showSwal from '../libs/showSwal'
import waitAndNavigate from '../libs/waitAndNavigate'
import { useForm } from 'react-hook-form';
import { TbCircleNumber2 } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";
import TwCities from "../data/TwCities.json"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { MyContext } from './memberLayout';
import { Input } from '../components'
import { Register2Form } from '../interfaces/User'

const api = import.meta.env.VITE_API_LINK

const SignUpPage2 = () => {
  const Context = useContext(MyContext);
  const navigate = useNavigate()
  const [county, setCounty] = useState<string>('臺北市')
  type selectList = string[]
  const selectedCounty = (TwCities.find(i => i.name === county))?.districts || {}

  const yearList: selectList = []
  for (let i = 0; i < 30; i++) {
    yearList.push((1994 + i).toString())
  }

  const dateList: selectList = []
  for (let i = 1; i <= 31; i++) {
    dateList.push(i.toString())
  }

  const monthList: selectList = []
  for (let i = 1; i <= 12; i++) {
    monthList.push(i.toString())
  }

  const getCountyValue = (e) => {
    setCounty(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    // 錯誤驗證時機
    mode: 'onTouched',
  });
  const onSubmit = async (data: any) =>  {
    const { address, districts, phone, name, year, month, date } = data
    const userData: Register2Form = {
      name,
      email: Context.email,
      password: Context.password,
      phone,
      birthday: `${year}/${month}/${date}`,
      address: {
        zipcode: districts.toString(),
        detail: address
      }
    }
    const response = await axios.post(
      `${api}api/v1/user/signup`, userData
    )
      const message = '註冊成功，請重新登入'
      showSwal(message, 'success')
      waitAndNavigate(navigate,'/member', 2000 )
  };
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
                    <FaRegCircleCheck size={32} style={{ color: '#BF9D7D' }} />
                    <p className="mt-1">輸入信箱及密碼</p>
                  </div>
                </div>
                <div className="border-bottom border-light" style={{ width: '120px' }}></div>
                <div className="d-flex flex-column align-items-center">
                  <TbCircleNumber2 size={32} style={{ color: '#BF9D7D' }} />
                  <p className="mt-1">填寫基本資料</p>
                </div>
              </div>
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <Input
                  register={register}
                  errors={errors}
                  id="name"
                  labelText="姓名"
                  type="text"
                  placeholder="請輸入姓名"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入姓名'
                    },
                    minLength: {
                      value: 2,
                      message: '姓名至少需要 2 個字元'
                    }
                  }}
                />
                <Input
                  register={register}
                  errors={errors}
                  id="phone"
                  labelText="手機號碼"
                  type="phone"
                  placeholder="請輸入手機號碼"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入手機號碼'
                    },
                    pattern: {
                      value: /^09\d{8}$/,
                      message: '手機號碼格式不正確'
                    }
                  }}
                />
                <div className='row mb-3 g-2'>
                  <p>生日</p>
                  <div className='col-4'>
                    <select id='year' className='form-select'
                    {...register('year')}
                    >
                      {
                        yearList.map(i => {
                          return (
                            <option key={i} value={i}>{i + ' 年'}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className='col-4'>
                    <select id='month' className='form-select'
                    {...register('month')}>
                      {
                        monthList.map(i => {
                          return (
                            <option key={i} value={i}>{i + ' 月'}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className='col-4'>
                    <select id='date' className='form-select'
                    {...register('date')}>
                      {
                        dateList.map(i => {
                          return (
                            <option key={i} value={i}>{i + ' 日'}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className='row mb-3 g-2'>
                  <p>地址</p>
                  <div className='col-6'>
                    <select id='county' className='form-select' defaultValue={county} onChange={getCountyValue}>
                      {
                        TwCities.map(i => {
                          return (
                            <option key={i.name} value={i.name}>{i.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className='col-6'>
                    <select id='districts' className='form-select'
                    {...register('districts')}>
                      {
                        selectedCounty.map(i => {
                          return (
                            <option key={i.zip} value={i.zip}>{i.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
                <Input
                  register={register}
                  errors={errors}
                  id="address"
                  labelText="詳細地址"
                  type="text"
                  placeholder="請輸入詳細地址"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入詳細地址'
                    }
                  }}
                />
                <div className="form-check">
                    <input id="checkList1" type="checkbox"
                      className="form-check-input"
                      name="like" value='記住帳號' />
                    <label className='form-check-label text-light' htmlFor="checkList1">我已閱讀並同意本網站個資使用規範</label>
                  </div>
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

export default SignUpPage2