import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes and update the formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* Input field for username */}
        <input
          type='text'
          placeholder='Username'
          className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          id='username'
          onChange={handleChange}
        />

        {/* Input field for email */}
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          id='email'
          onChange={handleChange}
        />

        {/* Input field for password */}
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          id='password'
          onChange={handleChange}
        />

        {/* Sign Up button */}
        <button
          disabled={loading}
          className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>

      {/* Already have an account? Sign In link */}
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in' className='text-blue-700'>
          Sign in
        </Link>
      </div>

      {/* Error message */}
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
