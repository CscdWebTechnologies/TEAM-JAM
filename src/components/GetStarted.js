import classes from './Getstarted.module.css'
import account from './images/Account.png'
import bank from './images/Bank.png'
import hand from './images/Hand.png'




function Getstarted() {
    return(
        <section className={classes.sections}>
            <div className={classes.mainDiv}>
                <h2 className={classes.heading1}>Get started in a few minutes</h2>
                <h2 className={classes.heading2}>Coinbase supports a variety of the most popular digital currencies.</h2>
                <div className={classes.divIcons}>
                    <div>
                        <img src ={account} alt="account" class="center"></img>
                        <h2 className={classes.innerText}>Create an account </h2>
                    </div>
                    <div className={classes.horizontalbar}></div>
                    <div>
                        <img src ={bank} alt="bank"class="center"></img>
                        <h2 className={classes.innerText}>Link your bank account</h2>
                    </div>
                    <div className={classes.horizontalbar}></div>
                    <div>
                        <img src ={hand} alt="hand"class="center"></img>
                        <h2 className={classes.innerText}>Start buying & selling</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Getstarted;