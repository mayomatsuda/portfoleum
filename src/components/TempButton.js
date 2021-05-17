const AddTask = ({ onAdd }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onAdd(
            {
                'contract': '0x06012c8cf97bead5deae237070f9587f8e7a266d',
                'id': '1557789',
                'tokenname': '',
                'tokensymbol': 'CK'
            }
            , 0, 0)
        onAdd(
            {
                'contract': '0x06012c8cf97bead5deae237070f9587f8e7a266d',
                'id': '1252732',
                'tokenname': '',
                'tokensymbol': 'CK'
            }
            , 0, 2)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default AddTask
