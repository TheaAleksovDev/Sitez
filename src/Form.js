import React from "react"

export default function Form(){

    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", newsletter: false}
    )
    function handleChange(event){
        const{name, value,type,checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type==="checkbox" ? checked : value
            }
        })       
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <div className="newsletter">

                <input 
                type="checkbox"
                id="newsletter"
                checked = {formData.newsletter}
                onChange={handleChange}
                name="newsletter"
            />
            <label htmlFor="newslatter">Sign up to our weekly newsletter</label>
            </div>
            
            <button>Sign up</button>
        </form>
    )
}
