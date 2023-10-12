import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
    <main className='header-menu'>
    <div className='header-left'><h1>Startup3</h1></div>
    <div className='nav-bar'><nav>
    <li className='list-bullet'>Overview</li>
    <li className='list-bullet'>Prices</li>
    <li className='list-bullet'>Blog</li>
    <li className='list-bullet'>Feedback</li>
    <button>Purchase</button>
    </nav></div>
    </main>
    <div className='main-container'>
    <aside>
    <h2>Generate Awesome Web Pages</h2>
    <h5>The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</h5>
    <button>Learn More</button>
    </aside>
    <section>
    <form>
    <h3 className='form-head'>Sign Up Now</h3>
    <div className='input-cont'>
    <input placeholder='your email' className='email-input'/>
    <input placeholder='your password' className='password-input'/>
    </div>
    <div className='checkbox'><input type='checkbox'/><p>I agree to the Terms of Service.</p></div>
    <button className='signin-button'>Sign In</button>
    <p className='break-container'><span className='break-div'></span><span className='break'>or</span><span className='break-div'></span></p>
    <button className='login-button'>Login via Twitter</button>
    <div className='signin'><p>Do you have an Account?</p><div>Sign In</div></div>
    </form>
    </section>
    </div>
    </div>

  );
}

export default App;
