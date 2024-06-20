'use client'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpForm() {
  return <>
      <Form action="">
        <div className="mb-4">
          <Label htmlFor="email" className="text-base mb-2 block">Name</Label>
          <Input type="email" className="text-base font-medium leading-normal py-3 rounded-lg border border-solid border-[#d7d7d7] border-l-4 h-auto focus:border-[#4A69E2] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#d7d7d7]" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-base mb-2 block">Email</Label>
          <Input type="email" className="text-base font-medium leading-normal py-3 rounded-lg border border-solid border-[#d7d7d7] border-l-4 h-auto focus:border-[#4A69E2] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#d7d7d7]" placeholder="Enter your email" />
        </div>
        <div className="mb-8">
          <Label htmlFor="picture" className="text-base mb-2 block">Password</Label>
          <Input type="password" className="text-base font-medium leading-normal py-3 rounded-lg border border-solid border-[#d7d7d7] border-l-4 h-auto focus:border-[#4A69E2] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#d7d7d7]" placeholder="Enter your password" />
        </div>
        <Button className="text-center w-full block rounded-md text-lg text-white font-medium leading-normal h-auto py-3 bg-[#232321] hover:bg-[#232321] hover:text-[#FFA52F] transition-all duration-300 ease-in shadow-md focus:shadow-xl">Login</Button>
      </Form>
  </>
}
