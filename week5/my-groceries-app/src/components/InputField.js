import React from "react"

function InputField({handleSubmit}) {
    const onSubmit = (event) => {
        event.preventDefault()
        handleSubmit(event.target.input.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <input
              type="text"
              name="input"
              placeholder="Boodschap toevoegen"
            />
          <button>Voeg toe</button>
        </form>
      )
    }

export default InputField