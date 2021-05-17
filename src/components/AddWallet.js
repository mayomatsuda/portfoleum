import { useState } from 'react'

// 0x0c34322840f8ea10dc0f88a948a4a7bbf4d5c6ed

const AddTask = ({ onAdd }) => {
    const [address, setAddress] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!address) return
        onAdd({ address })
        setAddress('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Add Wallet</label>
                <input type ='text' placeholder='Wallet address' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
