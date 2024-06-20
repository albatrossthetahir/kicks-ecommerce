import Image from "next/image";
import Link from "next/link";
import { SignUpForm } from "../../../Components/SignUpForm";

export default function SignUp() {
    return (
      <div className="min-h-[calc(100vh_-_64px)] w-full flex items-center justify-center">
        <div className="rounded-3xl border border-solid border-[#4A69E2] border-l-8 bg-white max-w-[600px] w-full mx-auto p-10 shadow-lg">
          <Image src={'/logo.svg'} width={128} height={32} alt="logo" className="mb-3" />
          <p className="text-[#888] text-base mb-8">Already have an account? <Link href={'/login'} className="text-[#232321] font-semibold underline">Login</Link></p>
          <SignUpForm />
        </div>
      </div>
    )
}
