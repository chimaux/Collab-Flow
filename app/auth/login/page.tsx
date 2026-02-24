'use client'
import Image from "next/image";
import { Zap } from 'lucide-react';
import { Form, Button, Input, message, Divider } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { CloseOutlined, EyeInvisibleOutlined, EyeOutlined, GoogleOutlined } from '@ant-design/icons';
import NextLink from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { useState } from "react";
import {useRouter } from "next/navigation";



interface loginFormValues {
  email: string;
  password: string;
}


export default function Login() {

  const router = useRouter();
  const [form] = Form.useForm();


  const supaBase = getSupabaseBrowserClient()
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const [surrentUser, setCurrentUser] = useState<User | null>(user);


  const closeStatusMessageBox = () => {
    setStatus(null)

  }



  const onFinish = async (values: loginFormValues) => {
    setLoading(true)
    const { email, password } = values;
    const { error } = await supaBase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      setStatus(error.message)
      setLoading(false)
    }
    else {
      setStatus("Login successful")
      form.resetFields();
      setLoading(false)
      router.push("/dashboard")
    }
  }





  return (
    <div className='relative w-screen h-screen'>
      <Image
        src="/lgBG.webp"
        alt="background image"
        fill

      />

      <div className="absolute w-screen h-screen flex justify-center items-center">

        <div className="bg-[#f0f0f0] rounded-[15px] lg:rounded-[30px] h-[85vh] lg:h-[90vh] w-[80vw] lg:w-[70vw] xl:w-[40vw] flex flex-col items-center px-5 md:px-10 lg:px-15">

          <div className=" mt-4 mb-4 lg:mb-10 lg:mt-10 w-10  lg:w-16">
            <Zap
              size={"100%"}
              color="currentColor"
              strokeWidth={0}
              fill="#096ef2"

            />
          </div>

          <div className="w-[70%] text-2xl lg:text-3xl font-semibold pl-5 lg:pl-15 mb-4 lg:mb-6 text-gray-950">
            Login
          </div>
          <Form
            onFinish={onFinish}
            form={form}
            layout="vertical" className="w-full"
          >
            <FormItem

              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email is required',
                },
                {
                  type: 'email',
                  message: 'Please enter a valid email address',
                },
              ]}
              validateTrigger={['onChange', 'onBlur']}
            >
              <Input
                placeholder="enter email"

                className="w-full h-12 lg:h-14"
              />
            </FormItem>
            <FormItem

              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              validateTrigger={['onChange', 'onBlur']}
            >
              <Input.Password
                iconRender={(visible) =>
                  visible ? (
                    <EyeOutlined style={{ color: '#096ef2' }} />
                  ) : (
                    <EyeInvisibleOutlined style={{ color: 'gray' }} />
                  )
                }
                placeholder="enter password"
                type="password"
                className="w-full h-12 lg:h-14"
              />
            </FormItem>

            <FormItem className="mb-4">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                style={{
                  height: 45,
                  fontSize: 18,
                  padding: '0 32px',
                }}
              >
                Log In
              </Button>
            </FormItem>
          </Form>
          <div className="w-full -mt-5 lg:-mt-4">
            <Divider plain >or</Divider>
          </div>
          <Button


            block
            size="large"
            style={{
              height: 45,
              fontSize: 18,
              padding: '0 32px',
            }}
            icon={<GoogleOutlined />}
          >
            continue with google
          </Button>
          <NextLink
            href={"/auth/sign-up"}
          >
            <div className="text-[#1676fd] mt-4 md:mt-6">Create Account</div>
          </NextLink>

          <div className="text-[#1676fd]">Join a Board Via Link</div>
        </div>

      </div>

      {
        status &&

        <div className="absolute inset-x-0 top-20 -translate-y-1/2 flex justify-center px-4 pointer-events-none z-10">
          <div
            className={`flex gap-x-4  pointer-events-auto
          px-6 py-3.5 rounded-xl
          text-sm font-medium text-center
          border shadow-sm backdrop-blur-sm
          transition-all duration-200 bg-white/80 text-gray-800 border-gray-200`}


          >
            <span>{status}</span>
            <button
              onClick={closeStatusMessageBox}
              className="p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close message"
            >
              <CloseOutlined className="text-base" />
            </button>
          </div>

        </div>
      }


    </div>
  )
}
