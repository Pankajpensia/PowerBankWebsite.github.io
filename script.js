let Balance = document.getElementById("Balance")
// All Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword, deleteUser} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
	import { getDatabase, ref, push, set, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
	

let HomePage = document.querySelector("#HomePage")
let ProductPage = document.querySelector("#ProductPage")
let ProfilePage = document.querySelector("#ProfilePage")
let RechargePage = document.querySelector("#RechargePage")
let WithdrawalPage = document.querySelector("#WithdrawalPage")
let BankPage = document.querySelector("#BankPage")
let RegisterPage = document.querySelector("#RegisterPage");
let LoginPage = document.querySelector("#LoginPage")
let BottomBar = document.querySelector("#BottomBar")
let OrderPage = document.querySelector("#OrderPage");
let RecordPage = document.querySelector("#RecordPage");
let TeamPage = document.querySelector("#TeamPage")
let SharePage = document.querySelector("#SharePage")
let ProfitPage = document.querySelector("#ProfitPage")
let VerifyReffer = document.getElementById("VerifyReffer")
let RefferTeamBox = document.getElementById("RefferTeamBox")

// All Buttons

let HomePageBtn = document.querySelector("#HomePageBtn")
let ProductPageBtn = document.querySelector("#ProductPageBtn")
let ProfilePageBtn = document.querySelector("#ProfilePageBtn")
let RechargePageBtn = document.querySelector("#RechargePageBtn")
let WithdrawalPageBtn = document.querySelector("#WithdrawalPageBtn")
let BankPageBtn = document.querySelector("#BankPageBtn")
let LoginPageBtn = document.querySelector("#LoginPageBtn")
let RegisterPageBtn = document.querySelector("#RegisterPageBtn")
let LogOutBtn = document.querySelector("#LogOutBtn")
let PaymentBtn = document.querySelector("#PaymentBtn")
let OrderPageBtn = document.querySelector("#OrderPageBtn")
let RecordPageBtn = document.querySelector("#RecordPageBtn");
let TeamPageBtn = document.querySelector("#TeamPageBtn");
let SharePageBtn = document.querySelector("#SharePageBtn");
let ProfitPageBtn = document.querySelector("#ProfitPageBtn");
let VerifyCode = document.querySelector("#VerifyCode")
//Product Buy Buttons
let EliteProductBuyBtn = document.querySelector("#EliteProductBuyBtn")
let EliteProProductBuyBtn = document.querySelector("#EliteProProductBuyBtn")
let SilverProductBuyBtn = document.querySelector("#SilverProductBuyBtn")
let SilverProProductBuyBtn = document.querySelector("#SilverProProductBuyBtn")
let GoldProductBuyBtn = document.querySelector("#GoldProductBuyBtn")
let DiamondProductBuyBtn = document.querySelector("#DiamondProductBuyBtn")
let PremiumProductBuyBtn = document.querySelector("#PremiumProductBuyBtn")
let PremiumProProductBuyBtn = document.querySelector("#PremiumProProductBuyBtn")

// Function Buttons
let RegisterBtn = document.querySelector("#RegisterBtn");
let LoginBtn = document.querySelector("#LoginBtn")
let ProductBuyBtn = document.querySelector("#ProductBuyBtn")
// Main Input Fields

let UserName = document.getElementById("UserName")
let ConfirmPassword = document.getElementById("ConfirmPassword")
let Password = document.getElementById("Password")
let RechargeAmount = document.getElementById("RechargeAmount")


// Recharge Fields
let PaymentMethod = document.querySelector(".PaymentMethod")
RegisterBtn.disabled = true

ConfirmPassword.addEventListener('input', function(){
  if (Password.value !== ConfirmPassword.value) {
    console.log('Passwords do not match');
    // Disable the register button if passwords do not match

      RegisterBtn.disabled = true;
    
  } else {
    console.log('Passwords match');
    // Enable the register button if passwords match
    RegisterBtn.disabled = false;
  }
})

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMS818AjyeDTpqKHhsERIXZzAl4Y0bEQ",
  authDomain: "powerbank-3c876.firebaseapp.com",
  databaseURL: "https://powerbank-3c876-default-rtdb.firebaseio.com",
  projectId: "powerbank-3c876",
  storageBucket: "powerbank-3c876.appspot.com",
  messagingSenderId: "680795917011",
  appId: "1:680795917011:web:7f1f25fadd5b2c62f1e226",
  measurementId: "G-X948BBTDVY"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();

let CurrentUserID;
let RefferKey;
RegisterBtn.disabled = true;

VerifyCode.addEventListener('click', function(){
  console.log('clicked..')
  let RefferCode = document.getElementById("RefferCode").value  

  onValue(ref(database, `Data/User/${RefferCode}/Personal`), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      // Get the key of the child data
      let DataKey = childSnapshot.key;
      RefferKey = DataKey
      // Extract data from the child snapshot
      const childData = childSnapshot.val();
      let Name = childData.Name;
      
      VerifyReffer.value = Name;
      console.log(Name)
      if(Name === "undefined"){
        RegisterBtn.disabled = true;
        VerifyReffer.value = "Refferal Not Found"
      }
      else{
        RegisterBtn.disabled = false;
        VerifyReffer.value = Name;
      }
      console.log("Reffer Name ", Name)
    });

    console.log(RefferCode)
  })


})

RegisterBtn.addEventListener('click', async function(){
  let MobileNumber = document.getElementById("MobileNumber").value
  let Password = document.getElementById("Password").value  
  let RefferCode = document.getElementById("RefferCode").value

  console.log("Mobile"+ MobileNumber+" "+"Password"+ Password)

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, MobileNumber+"@gmail.com", Password)
    const OwnerListUser = push(ref(database, "Data/OwnerListUser/User"));
    //  push(ref(database, "Data/OwnerListUser/Diposite"));
    //  push(ref(database, "Data/OwnerListUser/Withdrawal"));
    const usersRef = push(ref(database, `Data/User/${MobileNumber}/Personal`));
    //  push(ref(database, `Data/User/${MobileNumber}/Diposite`));
    //  push(ref(database, `Data/User/${MobileNumber}/Withdrawal`));
    //  push(ref(database, `Data/User/${MobileNumber}/Product`));
    
    const RefferalRef = push(ref(database, `Data/User/${RefferCode}/Reffer`));
    

  CurrentUserID = usersRef.key
  let RefferalID = RefferalRef.key;
  set(usersRef, {
   Name: UserName.value,
   Mobile: MobileNumber,
   Password: Password,
   Balance: 10,
   Profit: 0,
   RefferCode: RefferCode,
   RefferKey: RefferKey
	}).then(() => {
	location.reload();
	}).catch((error) => {
	alert("User Not Added. Error: " + error);
	});

  set(RefferalRef, {
    Name: UserName.value,
    Mobile: MobileNumber,
    Balance: 0,
    Profit: 0,
   }).then(() => {
   location.reload();
   }).catch((error) => {
   alert("User Not Added. Error: " + error);
   });
  
	set(OwnerListUser, {
    UserID: CurrentUserID,
    Name: UserName.value,
    Mobile: MobileNumber,
    Password: Password,
    Balance: 0,
    Profit: 0,
    RefferCode: RefferCode
    }).then(() => {
    alert("Account Registred");
    	  HomePage.style.display = "none"
	  LoginPage.style.display = "block"

    }).catch((error) => {
    alert("User Not Added. Error: " + error);
    });


  } catch (error) {
    console.log(error)

    if(error.code = "auth/weak-password"){
       alert("Enter Atleast 6 digit Password")
    }

    if(error.code = "auth/invalid-email"){
      alert("Please Check Your Mobile Number")
    }
  }
})


LoginBtn.addEventListener("click", async function (e) {
	e.preventDefault();
	const mobileNumber = document.getElementById("LoginMobileNumber").value + "@gmail.com";
	const password = document.getElementById("LoginPassword").value;

	try {
	const userCredential = await signInWithEmailAndPassword(auth, mobileNumber, password);
	const user = userCredential.user;
	console.log("Success! Welcome back!");
	alert("Login Successfully ! Welcome back!");
	localStorage.setItem("UserMobile", mobileNumber.replace("@gmail.com", ""))
	location.reload();
	} catch (error) {
	console.log(error);

  if(error.code == "auth/invalid-email"){
    alert("Please Check Your Mobile Number")
  }

  if(error.code == "auth/missing-password"){
    alert("Wrong Password:- Please Check Your Password")
  }

  if(error.code == "auth/invalid-login-credentials"){
    alert("Wrong Password")
  }

	}
	});

 NavUserName.innerHTML = localStorage.getItem("NavUserName")

	auth.onAuthStateChanged((user) => {
    if (user) {
      LoginPage.style.display = "none"
      RegisterPage.style.display = "none"
      
      HomePage.style.display = "block"
      BottomBar.style.display = "block"
    }
    else {
      LoginPage.style.display = "none"
      RegisterPage.style.display = "block"
      HomePage.style.display = "none"
      BottomBar.style.display = "none"
    }
    });



    onValue(ref(database, `Data/User/${localStorage.getItem("UserMobile")}/Personal`), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        // Get the key of the child data
        const childKey = childSnapshot.key
        
        // Extract data from the child snapshot
        const childData = childSnapshot.val();
    
        // Get the 'Balance' value from the data
        const NewBalance = childData.Balance;
        let Name = childData.Name;
        let Profit = childData.Profit;
        let RefferCode =  childData.RefferCode;
        let RefferKey = childData.RefferKey;
        // console.log("From Online ",Name)
        // Update the 'Balance' element with the retrieved value
        Balance.innerHTML = NewBalance;
         localStorage.setItem("Profit", Profit)
         localStorage.setItem("DataKey", childKey)
         localStorage.setItem("CurrentBalance", NewBalance)
         localStorage.setItem("NavUserName", Name)
         localStorage.setItem("RefferCode", RefferCode)
         localStorage.setItem("RefferID", RefferKey)
      });
    })

    onValue(ref(database, `Data/User/${localStorage.getItem("UserMobile")}/Reffer`), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        // Get the key of the child data
        let RefferData = childSnapshot.val();

        let Name = RefferData.Name;
        let Mobile = RefferData.Mobile;
        let Balance = RefferData.Balance;

      let RefferDetails = `
      <uni-view data-v-0406b02c="" class="bg-white margin-left-lg margin-top-xs text-black" style="border-bottom: 1px solid rgb(243, 243, 243);">
      <uni-view data-v-0406b02c="" class="padding-tb-xs flex justify-between align-center">
      <uni-view data-v-0406b02c="" class="flex"><uni-view data-v-0406b02c=""></uni-view><uni-view data-v-0406b02c="" class="text-cut">${Name}</uni-view></uni-view><uni-view data-v-0406b02c="" class="cuIcon-title text-white"></uni-view>
      </uni-view>
      <uni-view data-v-0406b02c="" class="padding-tb-xs padding-right-lg flex justify-between">
      <uni-view data-v-0406b02c="" class="flex align-center text-sm"><uni-view data-v-0406b02c="">${Mobile}</uni-view></uni-view>
      <uni-view data-v-0406b02c="" class="flex align-center">
      <uni-view data-v-0406b02c="" class="text-black">
      <uni-text data-v-0406b02c="" class="text-price"><span>${Balance}</span></uni-text>
      </uni-view>
      </uni-view>
      </uni-view>
      </uni-view>
      `

        RefferTeamBox.innerHTML += RefferDetails;
      });
    })

    onValue(ref(database, `Data/User/${localStorage.getItem("UserMobile")}/Record`), (snapshot) => {
      let RecordBox = document.getElementById("RecordBox")
      snapshot.forEach((childSnapshot) => {
        // Get the key of the child data
        let RefferData = childSnapshot.val();

        let Name = RefferData.Name;
        let Date = RefferData.Date;
        let Time = RefferData.Time;
        let Amount = RefferData.Amount;
        let Status = RefferData.Status

      let RefferDetails = `
      <uni-view data-v-0406b02c="" class="bg-white margin-left-lg margin-top-xs text-black my-2" style="border-bottom: 1px solid rgb(243, 243, 243);">
      <uni-view data-v-0406b02c="" class="padding-tb-xs flex justify-between align-center">
      <uni-view data-v-0406b02c="" class="flex"><uni-view data-v-0406b02c=""></uni-view><uni-view data-v-0406b02c="" class="text-cut">${Name}</uni-view></uni-view><uni-view data-v-0406b02c="" class="cuIcon-title text-white"></uni-view>
      </uni-view>
      <uni-view data-v-0406b02c="" class="padding-tb-xs padding-right-lg flex justify-between">
      <uni-view data-v-0406b02c="" class="flex align-center text-sm"><uni-view data-v-0406b02c="">${Date} / ${Time}</uni-view></uni-view>
      <uni-view data-v-0406b02c="" class="flex align-center">
      <uni-view data-v-0406b02c="" class="text-black">
      <uni-text data-v-0406b02c="" class="text-price"><span>${Amount}</span></uni-text>
      </uni-view>
      </uni-view>
      <uni-view data-v-0406b02c="" class="flex align-center">
      <uni-view data-v-0406b02c="" class="text-black">
      <uni-text data-v-0406b02c="" class="text-price"><span>${Status}</span></uni-text>
      </uni-view>
      </uni-view>
      </uni-view>
      </uni-view>
      `

        RecordBox.innerHTML += RefferDetails;
      });
    })



    LogOutBtn.addEventListener("click", function() {
      auth.signOut().then(() => {
        LoginPage.style.display = "none"
        RegisterPage.style.display = "block"
        HomePage.style.display = "none"
        BottomBar.style.display = "none"
      localStorage.clear()
      }).catch((error) => {
      console.error("Error during logout:", error);
      });
      })

let PaymentOrderBtn = document.querySelector("#PaymentOrderBtn")
let WithdrawalBtn = document.querySelector("#WithdrawalBtn")
let PaymentMethodBtn = document.getElementById("PaymentMethod");
let Method;
// console.log(PaymentMethod.value)
PaymentMethodBtn.addEventListener("change", function(e){
   Method = e.target.value
   console.log(Method)
})

  PaymentOrderBtn.addEventListener("click", function(e){
    e.preventDefault();
    alert("Wait Your Record In Proccess")
    let PaymentUserName = document.getElementById("PaymentUserName").value;
    let PayAmount = document.getElementById("PayAmount").value;
    let PaymentDate = document.getElementById("PaymentDate").value;
    let PaymentTime = document.getElementById("PaymentTime").value;
    
    let UserRecordRef = push(ref(database, `Data/User/${localStorage.getItem("UserMobile")}/Record`))
    let UserKey = UserRecordRef.key;
    let OwnerDipositeRef = push(ref(database, "Data/OwnerListUser/Diposite"))
     set(OwnerDipositeRef, {
        GameUser: localStorage.getItem("UserMobile"), 
        Name: PaymentUserName,
        Method: Method,
        Date: PaymentDate,
        Time: PaymentTime,
        Amount: PayAmount,
        UserKey: UserKey
      }).then(() => {
       console.log("Order Sended")
      }).catch((error) => {
      alert("Order Not Sended " + error);
      });

      set(UserRecordRef, {
        Name: "Diposite Request",
        Date: PaymentDate,
        Time: PaymentTime,
        Amount: PayAmount,
        Status: "Pending"
      }).then(() => {
      alert("Order Sended");
      location.reload();
      }).catch((error) => {
      alert("Order Not Sended " + error);
      });
  })




WithdrawalBtn.addEventListener("click", function(){
  alert("Your Request in Process")
  let WithdrawalAmount = document.getElementById("WithdrawalAmount").value;
  let WithdrawalUPI = document.getElementById("WithdrawalUPI").value;
  let UserRecordRef = push(ref(database, `Data/User/${localStorage.getItem("UserMobile")}/Record`))
  let UserKey = UserRecordRef.key;
  
  
  let WithdrawalRef = push(ref(database, "Data/OwnerListUser/Withdrawal"))
  let Tiime = new Date();
  let CurrentDay = Tiime.getDate();
  let CurrentMonth = Tiime.getMonth()+1;
  let CurrentYear = Tiime.getFullYear()
  let Hrs = Tiime.getHours();
  let Min = Tiime.getMinutes();
  let Sec = Tiime.getSeconds();
  let CurrentDate = CurrentDay + "/" + CurrentMonth + "/" + CurrentYear;
  let CurrentTime = Hrs + "/" + Min + "/" + Sec;
  set(WithdrawalRef, {
     GameUser: localStorage.getItem("UserMobile"), 
     UPI: WithdrawalUPI,
     Amount: WithdrawalAmount,
     UserKey: UserKey
   }).then(() => {
   alert("Order Sended");
   location.reload();
   }).catch((error) => {
   alert("Order Not Sended " + error);
   });

   set(UserRecordRef, {
    Amount: WithdrawalAmount,
    Name: "Withdrawal Request",
    Time: CurrentTime,
    Date: CurrentDate,
    Status: "Pending"
  }).then(() => {
  alert("Order Sended");
  location.reload();
  }).catch((error) => {
  alert("Order Not Sended " + error);
  });
  

})

//Elite Pro Product Price 100 Daily Profit 10

EliteProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 10

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
    alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+5
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
          localStorage.setItem("FreeProduct", true)
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }


});

EliteProductBuyBtn.disabled = localStorage.getItem("Display")


//Elite Pro Product Price 200 Daily Profit 20
EliteProProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 200

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
 alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+20
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});

//Silver Product Price 500 Daily Profit 50
SilverProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 500

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
 alert("Insufficient balance")
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+50
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});

//Silver Pro Product Price 1000 Daily Profit 100
SilverProProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 1000

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+100
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});

//Gold Product Price 1500 Daily Profit 150
GoldProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 1500

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+150
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});

//Diamond Product Price 2000 Daily Profit 200
DiamondProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 2000

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+200
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});

//Premium Product Price 2500 Daily Profit 250
PremiumProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 2500

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+250
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});

//Silver Product Price 3000 Daily Profit 300
PremiumProProductBuyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Alert to indicate that the product has been added
  // Construct the record key
   const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;

  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);

  // Calculate the new balance
  const newAmount = 3000

  // Check if the newAmount is greater than or equal to the current balance
  if (newAmount > localStorage.getItem("CurrentBalance")) {
alert("Insufficient balance");
  } else {
  let CurrentNewAmount = parseInt(localStorage.getItem("CurrentBalance"))-parseInt(newAmount)
    // Update the 'Balance' field in the database
    update(DipsoteRef, { Balance: CurrentNewAmount })
      .then(() => {
        let NewProfit = parseInt(localStorage.getItem("Profit"))+300
        update(DipsoteRef, { Profit: NewProfit })
      .then(() => {
          alert("Product Added")
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
      alert("Product Added")
        location.reload();
      })
      .catch((error) => {
        alert("Failed to update amount: " + error);
      });
  }
});



onValue(ref(database, `Data/User/${localStorage.getItem("RefferCode")}/Personal`), (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    // Get the key of the child data
    const childKey = childSnapshot.key
    
    // Extract data from the child snapshot
    const childData = childSnapshot.val();
    let CurrentBalanceOfRefferalUser = childData.Balance;
    localStorage.setItem("CurrentReffer", CurrentBalanceOfRefferalUser);
  });
})

let DailyCheckIn = document.querySelector("#DailyCheckIn");

console.log("Mob", localStorage.getItem("RefferCode"), "ID", localStorage.getItem("RefferID"))

DailyCheckIn.addEventListener("click", function(){
  // Check if the user has seen the message today
const hasSeenMessageToday = localStorage.getItem('hasSeenMessageToday');

// Get the current date
const currentDate = new Date().toLocaleDateString();

// If the user hasn't seen the message today, show it and update the local storage
if (hasSeenMessageToday !== currentDate) {

  localStorage.setItem('hasSeenMessageToday', currentDate)
	const recordKey = `${localStorage.getItem("UserMobile")}/Personal/${localStorage.getItem("DataKey")}`;
  // Reference to the specific record in the database
  const DipsoteRef = ref(database, `Data/User/${recordKey}`);
  const RefferalBonus = ref(database, `Data/User/${localStorage.getItem("RefferCode")}/Personal/${localStorage.getItem("RefferID")}`);



  let DailyCheckInAmount = parseInt(localStorage.getItem("CurrentBalance"))+parseInt(localStorage.getItem("Profit"))
  let Bonus = localStorage.getItem("Profit")/30
 

  update(DipsoteRef, { Balance: DailyCheckInAmount })
  update(RefferalBonus, { Balance: parseInt(localStorage.getItem("CurrentReffer")) + parseInt(localStorage.getItem("Profit")/2)})

  .then(()=>{
     alert("Amount Added")
     
     DailyCheckIn.disabled = localStorage.getItem("24Condition")
  })
  .catch(()=>{
    alert("Network Issue")
  })
}
else{
	alert("Today Profit Already Claimed")
}

});

RechargeAmount.addEventListener("input", function(){
  let PaymentLink = `upi://pay?pa=3xtrade@ybl&pn=${localStorage.getItem("UserMobile")}&cu=INR&am=${RechargeAmount.value}`
  PaymentBtn.href = PaymentLink;  
})


ShowPass.addEventListener('click', function() {
  // Check the current type of the password input field
  var currentType = document.getElementById("LoginPassword").type;

  // Toggle between "password" and "text" based on the current type
  document.getElementById("LoginPassword").type = (currentType === "password") ? "text" : "password";
});

  const elements = document.querySelectorAll('.Pages');
// Apply the same style to each element using forEach
function hidePages(){

elements.forEach(element => {
 element.style.display = "none"
});

}

HomePageBtn.addEventListener('click', function(){
    hidePages();

    HomePage.style.display = "block"
})


ProductPageBtn.addEventListener('click', function(){
    hidePages();

    ProductPage.style.display = "block"
})


ProfilePageBtn.addEventListener('click', function(){
    hidePages();

    ProfilePage.style.display = "block"
})

RechargePageBtn.addEventListener('click', function(){
    hidePages();

    RechargePage.style.display = "block"
})

WithdrawalPageBtn.addEventListener('click', function(){
    hidePages();

    WithdrawalPage.style.display = "block"
})


LoginPageBtn.addEventListener('click', function(){
    hidePages();

    LoginPage.style.display = "block"
})

RegisterPageBtn.addEventListener('click', function(){
    hidePages();

    RegisterPage.style.display = "block"
})

OrderPageBtn.addEventListener("click", function(){
  hidePages();
   
  OrderPage.style.display = "block"
})

RecordPageBtn.addEventListener("click", function(){
  hidePages();

  RecordPage.style.display = "block"
})

TeamPageBtn.addEventListener("click", function(){
  hidePages();

  TeamPage.style.display = "block"
})

SharePageBtn.addEventListener("click", function(){
  hidePages();

  SharePage.style.display = "block"
})

ProfitPageBtn.addEventListener("click", function(){
  hidePages();

  ProfitPage.style.display = "block"
})
