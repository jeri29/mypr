import React, { Component,useState,axios} from 'react'
import './Signup.css';

function SignUp(){
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
 const [password, setPassword] = useState();

  const addDetails = () => {
      axios.post('http://localhost:3001/create', {
          name: name,
          phone: phone,
          password: password,
      }).then(() => console.log("Success"))
  }
 
    return (
      
     
      <div class="wrapper">
    <div class="container">
        <form action="">
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Booking Details
            </h1>
            <div class="name">
                <div>
                    <label for="f-name">Hotel Name</label>
                    <input type="text" name="f-name"/>
                </div>
                <div>
                    <label for="l-name">City</label>
                    <input type="text" name="l-name"/>
                </div>
            </div>
            <div class="street">
                <label for="name">Country</label>
                <input type="text" name="address"/>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">Name</label>
                    <input type="text" name="city"/>
                </div>
                <div>
                    <label for="state">Email</label>
                    <input type="text" name="state"/>
                </div>
                <div>
                <label for="start">Date:</label>

                 <input type="date" id="start" name="trip-start"
                value="2021-08-20"
                   min="2018-01-01" max="2050-12-31"/>
                </div>
                </div>
                <div class="btns">
                <button>CHECK</button>
                </div>
            
            <h1>
                <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
                <label for="card-num">Card No.</label>
                <input type="text" name="card-num"/>
            </div>
            <div class="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="text" name="expire"/>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security"/>
                </div>
            </div>
            <div class="btns">
               {/* <button>Book</button>*/}
                <button>BOOK</button>
            </div>
        </form>
    </div>
</div>
   )
  }


 
    

export default SignUp

    /*
      <div id="checkOut">
  <h1>EXPLORE</h1>
  <h2>BOOKING DETAILS</h2>
  <form>
  <div class="form-group">
    <div class="form-group col-md-6">
      <label for="cardName">COUNTRY</label>
      <select id="country" class="form-control">
      <option selected>Maldives</option>
      <option>India</option>
      <option>Dubai</option>
      <option>Switzerland</option>
      <option>Rome</option>
    </select>
    </div>
    <div class="form-group col-md-6">
      <label for="cardName">HOTELS</label>
      <select id="country" class="form-control">
      <option selected>Le Manto</option>
      <option>Paradise</option>
      <option>Deccan</option>
      <option>Novotel</option>
      <option>Wells</option>
    </select>
    {/* <input type="text" class="form-control" id="cardName" placeholder="Search Country"/>
    
   </div>
    <div class="form-group col-md-6">
      <label for="cardNum">For :</label>
      <input type="number" class="form-control" id="cardNum" placeholder="How many members"/>
    </div>
  </div>
  
  
    <div class="form-group col-md-6">
      <label for="cVV">Email</label>
      <h2>Email</h2><input type="text" class="form-control" id="cVV" placeholder="Email"/>
    </div>
  
 
  <button class="btn btn-primary">GET AVILABILITY DETAILS</button>
</form>
</div>
   
  */

 

    
    