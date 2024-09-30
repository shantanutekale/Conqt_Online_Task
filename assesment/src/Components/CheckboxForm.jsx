import React, { useState } from 'react'

function CheckboxForm() {
    const [showItemFields, setShowItemFields] = useState(false);
    const [showSupplierFields, setShowSupplierFields] = useState(false);
    const [formData, setFormData] = useState({
        itemName: '',
        quantity: '',
        unitprice: 0,
        dateOfSubmission: '',
        supplierName: '',
        companyName: '',
        country: '',
        state: '',
        city: "",
        email: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    const handleCheckBox = (type) => {
        if (type === 'item') {
            setShowItemFields(!showItemFields)
        }
        else if (type === 'supplier') {
            setShowSupplierFields(!showSupplierFields)
        }
    }

    const handleInput = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div >
                <h2>Select Options</h2>
                <div>
                    <label>
                        <input type="checkbox" onChange={() => handleCheckBox('item')}
                            checked={showItemFields} />
                        Item
                    </label>
                    <label>
                        <input type="checkbox" onChange={() => handleCheckBox('supplier')}
                            checked={showSupplierFields} />
                        Supplier
                    </label>


                </div>
                {showItemFields && (
                    <div>
                        <div >
                            <h3>Item Data</h3>
                            <div>
                                <label>
                                    item name
                                    <input
                                        type='text'
                                        name='itemName'
                                        placeholder='item Name'

                                        value={formData.itemName}
                                        onChange={handleInput}
                                    />
                                </label>
                                <label>
                                    quantity
                                    <input
                                        type='text'
                                        name='quantity'
                                        placeholder='quantity'
                                        maxLength={225}
                                        value={formData.quantity}
                                        onChange={handleInput}

                                    />
                                </label>

                            </div>

                            <div>
                                <label>
                                    unit Price
                                    <input
                                        type='number'
                                        name='unitprice'
                                        placeholder='unit Price'

                                        value={formData.unitprice}
                                        onChange={handleInput}

                                    />
                                </label>
                                <label>
                                    Date of Submission
                                    <input
                                        type='text'
                                        name='dateOfSubmission'
                                        placeholder='Date Of Submission'
                                        maxLength={225}
                                        value={formData.dateOfSubmission}
                                        onChange={handleInput}

                                    />
                                </label>
                            </div>
                        </div>
                        <h3>Supplier Details</h3>
                        <div>
                            <div>
                                <label>
                                    Supplier Name
                                    <input
                                        type='text'
                                        name='supplierName'
                                        placeholder='  Supplier Name'
                                        maxLength={225}
                                        value={formData.supplierName}
                                        onChange={handleInput}
                                    />
                                </label>
                                <label>
                                    company Name
                                    <input
                                        type='text'
                                        name='companyName'
                                        placeholder='company Name'
                                        maxLength={225}
                                        value={formData.companyName}
                                        onChange={handleInput}

                                    />
                                </label>

                            </div>
                            <div>
                                <label>
                                    County
                                    <input
                                        type='text'
                                        name='country'
                                        placeholder=' County'
                                        maxLength={225}
                                        value={formData.country}
                                        onChange={handleInput}
                                    />
                                </label>
                                <label>
                                    State
                                    <input
                                        type='text'
                                        name='state'
                                        placeholder='state'
                                        maxLength={225}
                                        value={formData.state}
                                        onChange={handleInput}

                                    />
                                </label>

                            </div>

                            <div>
                                <label>
                                    City
                                    <input
                                        type='text'
                                        name='city'
                                        placeholder=' City'
                                        maxLength={225}
                                        value={formData.city}
                                        onChange={handleInput}
                                    />
                                </label>
                                <label>
                                    Email Address
                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='Email Address'

                                        value={formData.email}
                                        onChange={handleInput}

                                    />
                                </label>

                            </div></div>
                        <button type='submit' >Submit</button>
                    </div>
                )}

            </div>
        </form>
    )
}

export default CheckboxForm