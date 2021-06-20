import { useState } from 'react'

// 0x0c34322840f8ea10dc0f88a948a4a7bbf4d5c6ed
// 0x32262672C6D1B814019f4Ca4e2fc53285a919704
// 0x997202adee11ebeb3d5b6b3c0b3b2b3f3002bc31

const AddTask = ({ onAdd }) => {
    const [address, setAddress] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!address) return
        onAdd({ address })
        setAddress('')
    }

    return (
        <div>
            <h1 style={{ color:"#304C9D" }}>Portfoleum</h1>
            <br />
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Add Wallet</label>
                    <input type ='text' placeholder='Wallet address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <input type='submit' value='Submit' className='btn btn-block'/>
            </form><br /><br />
            <label style={{ fontSize: "14px", color:"gray" }}>Want to check it out? Try these wallets:</label><br />
            <a href="/?address=0x0c34322840f8ea10dc0f88a948a4a7bbf4d5c6ed" style={{ fontSize: "12px", color:"gray" }}>0x0c34322840f8ea10dc0f88a948a4a7bbf4d5c6ed</a><br />
            <a href="/?address=0x32262672C6D1B814019f4Ca4e2fc53285a919704" style={{ fontSize: "12px", color:"gray" }}>0x32262672C6D1B814019f4Ca4e2fc53285a919704</a>
        </div>
    )
}

export default AddTask
