import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Adjust the path
import { useRouter } from 'next/navigation';
const EnterOTPComponent = () => {
  const [otp, setOtp] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Use Next.js router for redirection

  const handleSubmitOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: router.query.email, otp }), // Assuming email is passed as query param
      });

      if (!response.ok) {
        throw new Error('Invalid OTP');
      }

      const result = await response.json();
      console.log(result.message); // OTP verified successfully message

      // Redirect to the password reset page or any other appropriate page
      router.push('/reset-password'); // Replace with actual path
    } catch (error) {
      console.error(error);
      alert('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className='flex flex-col gap-4 items-center'>
    //   <label className="block mb-2 text-sm font-medium text-white dark:text-white">Enter OTP</label>
    //   <input 
    //     type="text" 
    //     value={otp}
    //     onChange={(e) => setOtp(e.target.value)}
    //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //     placeholder="Enter OTP"
    //   />
    //   <Button type="submit" onClick={handleSubmitOTP} variant="default" size="default">
    //     Verify OTP
    //   </Button>
    // </div>


    <div>
      <div className=' flex my-[20px] flex-col gap-[15px] justify-center items-center'>

        <div className='flex flex-col gap-[2px] ml-[100px] '>
          <label className="block mb-2 text-sm font-medium text-white dark:text-white ">Enter OTP</label>
          <div className='w-[450px] mx-auto '>
            <input type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              aria-describedby="helper-text-explanation"
              className="bg-transparent border-b-[2px] border-[#FFFFFF] transition-all duration-200 ease-in  text-[#00910E] text-md focus:outline-none   focus:border-[#00910E] block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className='my-[20px]'>
          <Button type="submit" onClick={handleSubmitOTP} variant="default" size="default"
            className='hover:text-[#00910E]  rounded-full w-[150px] transition-all duration-100 ease-in '
            disabled={loading}>{loading ? 'Verifying...' : 'Verify OTP'}</Button>
        </div>

      </div>
    </div>
  );
};

export default EnterOTPComponent; 
