import { useState } from 'react';

function RegForm() {
  const [name, setName] = useState("");

  return (
    <div className='bg-white gap-x-4'>
        <form className='flex gap-x-4'>
            <label>Enter your Name
                <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    </div>
    
  )
}

export default RegForm