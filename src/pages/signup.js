import '../styles/SignUp.css'
function SignUp(){
    return(
    <div>
        <div id = "splitScreen">
            <div id ="topPane ">
               <img></img>
            </div>
            <div id ="bottomPane">
              <form>
                Full Name  <input type="text" placeholder="Enter your Full name"/><br/>
                Email <input type ="email" placeholder="Enter your Email"/><br/>
                Mob.No.<input type ="text" placeholder="Enter your Contact"/><br/> 
                Password<input type="password" placeholder="enter atleast 8 character"/> <br/>

               </form>
            </div>
        </div>
    </div>
    )
}
export default SignUp; 