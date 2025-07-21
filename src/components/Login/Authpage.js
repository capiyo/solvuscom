import React from 'react'

export const Authpage = () => {
  return (
   <div>


  <div>
        <nav>
            <div class="logo">
                <span>SITE</span> Name
            </div>
            <input type="checkbox" id="click"/>
            <label for="click" class="icon">
                <i class="fa fa-bars"></i>
            </label>
            <ul>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="#">Menu 3</a></li>
                <li><a href="#">Menu 4</a></li>
            </ul>
        </nav>
    </div>

       <div>
  
        <div class="content">
            
            <div class="slideshowcontainer">
                <div class="Imageslider">
                    <div class="slidenumber"> 1/3 </div>
                        <img src=".\Images\islandofbooks.jpg" height="300px" width="500px"/ >
                            <div class="text">Image Slider Caption 1</div>
                </div>
    
                <div class="Imageslider">
                    <div class="slidenumber"> 1/3 </div>
                        <img src=".\Images\image3.jpg" height="300px" width="500px" />
                            <div class="text">Image Slider Caption 2</div>
                </div>
       
                <div class="Imageslider">
                    <div class="slidenumber"> 2/3 </div>
                        <img src=".\Images\image2.jpg"  height="300px" width="500px" />
                            <div class="text">Image Slider Caption 3</div>
                </div>
                
                <div class="Imageslider">
                    <div class="slidenumber"> 3/3 </div>
                        <img src=".\Images\customizedsearch.jpg" height="300px" width="500px"/>
                            <div class="text">Image Slider Caption 3</div>
                </div>
      
                <div class="Imageslider">
                    <div class="slidenumber"> 4/3 </div>
                        <img src=".\Images\books.jpg" height="300px" width="500px"/>
                            <div class="text">Image Slider Caption 4</div>
                </div>
            </div>
        
        <div class="rightside">
            <h1>PRESS JOIN FOR MODAL</h1>
                <button id="button">Join</button>
        </div>
    
        </div>

        
        <div class="popup-container" id = "popup-container">
            
           

            <div class="form-container sign-up-container">
                <form action="#" class="form-signUp" method="POST">
                    <h1>Create Account</h1>
                    <div class="social-container">
                      
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" id = "name" required/>
                    <input type="email" placeholder="Email" id="email" required/>
                    <input type="password" placeholder="Password" id="pass" required/>
                    <button type="submit" id="register">Sign Up</button>
                </form>
            </div>

           

            <div class="form-container sign-in-container">
                <form action="" class="form-signin" method="POST">
                    <h1>Sign in</h1>
                    <div class="social-container">
                    
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" id ="e-mail" required/>
                    <input type="password" placeholder="Password" id="password" required/>
            
                    <button type="submit" id="login">Sign In</button>
                </form>
            </div>

        
            <div class="overlay-container">

                <div class="overlay">

                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected please enter your log in details.</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>

                    <div class="overlay-panel overlay-right">
                        <h1>Hello!</h1>
                        <p>Enter your details and start yourjourney</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>

                </div>

            </div>
        </div>
        
</div> 

  



 




</div>























   
    
    
  
)
}
