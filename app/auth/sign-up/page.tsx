'use client'
import Image from "next/image";
import { Zap } from 'lucide-react';
import { Form, Button, Input, message, Divider } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { GoogleOutlined } from '@ant-design/icons';
import NextLink from "next/link"

export default function Signup() {
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
                        Signup
                    </div>
                    <Form layout="vertical" className="w-full">
                        <FormItem

                            name="email"
                            rules={[{ required: true, message: 'email is required' }]}
                        >
                            <Input
                                placeholder="enter email"

                                className="w-full h-12 lg:h-14"
                            />
                        </FormItem>
                        <FormItem

                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input
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
                                Signup
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
                    href={"/auth/login"}
                    >
                        <div className="text-[#1676fd] mt-4 md:mt-6">Login</div>
                    </NextLink>

                    <div className="text-[#1676fd]">Join a Board Via Link</div>
                </div>

            </div>



        </div>
    )
}
