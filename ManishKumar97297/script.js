let AdminHomePage = document.querySelector("#AdminHomePage")
let AdminLoginPage = document.querySelector("#AdminLoginPage")


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, deleteUser } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase, ref, push, set, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyMS818AjyeDTpqKHhsERIXZzAl4Y0bEQ",
    authDomain: "powerbank-3c876.firebaseapp.com",
    projectId: "powerbank-3c876",
    storageBucket: "powerbank-3c876.appspot.com",
    messagingSenderId: "680795917011",
    appId: "1:680795917011:web:7f1f25fadd5b2c62f1e226",
    measurementId: "G-X948BBTDVY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();

let UserTableForm = document.getElementById("UserTable");
let ModifyAmount = document.getElementById("ModifyAmount");

// Function to update user data in the database
function updateUserData(recordKey, newBalance) {
    const DipsoteRef = ref(database, `Data/User/${recordKey}`);
    
    update(DipsoteRef, { Balance: newBalance })
        .then(() => {
            alert("Updated successfully.");

            location.reload();
        })
        .catch((error) => {
            console.error("Error updating data:", error);
        });
}

// Function to render user table row
function renderUserTableRow(name, mobile, balance, key) {
    return `
        <tr>
            <th scope="row">${name}</th>
            <td>${mobile}</td>
            <td>${balance}</td>
            <td>
                <button class="btn btn-primary editBtn" data-key="${key}" data-mobile="${mobile}" data-old="${balance}" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            </td>
        </tr>
    `;
}

// Event delegation for edit buttons
UserTableForm.addEventListener('click', function (event) {
    if (event.target.classList.contains('editBtn')) {
        const dataKey = event.target.getAttribute('data-key');
        const dataMobile = event.target.getAttribute('data-mobile');
        const dataBalance = event.target.getAttribute('data-old');
        ModifyAmount.value = dataBalance;
        const recordKey = `${dataMobile}/Personal/${dataKey}`;

        // Save button click event listener
        document.getElementById('SaveChangesBtn').addEventListener('click', function () {
            const newBalance = ModifyAmount.value;
            updateUserData(recordKey, newBalance);
        });
    }
});

// Listen for changes in the database and update the table
onValue(ref(database, "Data/OwnerListUser/User"), (snapshot) => {
    UserTableForm.innerHTML = ''; // Clear previous content before updating

    snapshot.forEach((childSnapshot) => {
        let childData = childSnapshot.val();

        onValue(ref(database, `Data/User/${childData.Mobile}/Personal`), (userDataSnapshot) => {
            userDataSnapshot.forEach((userDataSnapshot) => {
                let UserData = userDataSnapshot.val();
                if (UserData) {
                    let { Name, Mobile, Balance } = UserData;
                    let key = userDataSnapshot.key;

                    let UserTable = renderUserTableRow(Name, Mobile, Balance, key);
                    UserTableForm.innerHTML += UserTable;
                }
            });
        });
    });
});


const DipositeTable = document.getElementById("DipositeTable");

// Function to render deposit table row
function renderDepositTableRow(name, mobile, amount, date, time, method, key, UserKey) {
    return `
        <tr>
            <td>${name}</td>
            <td>${mobile}</td>
            <td><b>${amount}</b></td>
            <td>${date}</td>
            <td>${time}</td>
            <td>${method}</td>
             <td>
                 <button class="btn btn-success AcceptBtn" data-mobile="${mobile}"  data-key="${key}" data-key-user="${UserKey}">Accept</button>
                <button class="btn btn-danger delBtn" data-mobile="${mobile}" data-key-user="${UserKey}" data-key="${key}">Reject</button>
            </td>
        </tr>
    `;
}

// Event delegation for delete buttons
DipositeTable.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delBtn')) {
        const documentIdToDelete = event.target.getAttribute("data-key");
        const EditStatusMobile = event.target.getAttribute("data-mobile");
        const EditStatusKey = event.target.getAttribute("data-key-user");
        if (documentIdToDelete && EditStatusMobile && EditStatusKey) {
            try {
                const documentRefToDelete = ref(database, `Data/OwnerListUser/Diposite/${documentIdToDelete}`);
                const EditRecord = ref(database, `Data/User/${EditStatusMobile}/Record/${EditStatusKey}`);
                
                // Update record status to "Complete"
                await update(EditRecord, { Status: "Reject" });
                
                // Delete document from OwnerListUser
                await DipositeDelete(documentRefToDelete);
                
                alert("Order Rejected");
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("An error occurred while deleting the document.");
            }
        } else {
            alert("Missing required attributes for deletion.");
        }
    }

    if (event.target.classList.contains('AcceptBtn')) {
        const documentIdToDelete = event.target.getAttribute("data-key");
        const EditStatusMobile = event.target.getAttribute("data-mobile");
        const EditStatusKey = event.target.getAttribute("data-key-user");
        if (documentIdToDelete && EditStatusMobile && EditStatusKey) {
            try {
                const documentRefToDelete = ref(database, `Data/OwnerListUser/Diposite/${documentIdToDelete}`);
                const EditRecord = ref(database, `Data/User/${EditStatusMobile}/Record/${EditStatusKey}`);
                
                // Update record status to "Complete"
                await update(EditRecord, { Status: "Complate" });
                
                // Delete document from OwnerListUser
                await DipositeDelete(documentRefToDelete);
                
                alert("Order Complate");
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("An error occurred while deleting the document.");
            }
        } else {
            alert("Missing required attributes for deletion.");
        }
    }
});

// Function to delete document from OwnerListUser
async function DipositeDelete(docRef) {
    try {
      await remove(docRef)
    } catch (error) {
        throw error;
    }
}

// Fetch and render deposit data
onValue(ref(database, "Data/OwnerListUser/Diposite"), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        let childDate = childSnapshot.val();
        let { Name, GameUser, Method, Date, Time, Amount, UserKey } = childDate;
        let key = childSnapshot.key;

        let DepositTableRow = renderDepositTableRow(Name, GameUser, Amount, Date, Time, Method, key, UserKey);
        DipositeTable.innerHTML += DepositTableRow;
    });
});



const WithdrawalTable = document.getElementById("WithdrawalTable");

// Function to render deposit table row
function renderWithdrawalTableRow(GameUser, amount, UPI, key, UserKey) {
    return `
        <tr>
            <td>${GameUser}</td>
            <td>${amount}</td>
            <td><b>${amount}</b></td>
            <td>${UPI}</td>
            <td>
            <button class="btn btn-success AccecptWithdrawal" data-mobile="${GameUser}"  data-key="${key}" data-key-user="${UserKey}">Accept</button>
            <button class="btn btn-danger DeleteWithdrawal" data-mobile="${GameUser}" data-key-user="${UserKey}" data-key="${key}">Reject</button>
        
            </td>
        </tr>
    `;
}

// Event delegation for delete buttons
WithdrawalTable.addEventListener('click', async (event) => {
        if (event.target.classList.contains('DeleteWithdrawal')) {
        const documentIdToDelete = event.target.getAttribute("data-key");
        const EditStatusMobile = event.target.getAttribute("data-mobile");
        const EditStatusKey = event.target.getAttribute("data-key-user");
        if (documentIdToDelete && EditStatusMobile && EditStatusKey) {
            try {
                const documentRefToDelete = ref(database, `Data/OwnerListUser/Withdrawal/${documentIdToDelete}`);
                const EditRecord = ref(database, `Data/User/${EditStatusMobile}/Record/${EditStatusKey}`);
                
                // Update record status to "Complete"
                await update(EditRecord, { Status: "Reject" });
                
                // Delete document from OwnerListUser
                await DipositeDelete(documentRefToDelete);
                
                alert("Order Rejected");
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("An error occurred while deleting the document.");
            }
        } else {
            alert("Missing required attributes for deletion.");
        }
    }

    if (event.target.classList.contains('AccecptWithdrawal')) {
        const documentIdToDelete = event.target.getAttribute("data-key");
        const EditStatusMobile = event.target.getAttribute("data-mobile");
        const EditStatusKey = event.target.getAttribute("data-key-user");
        if (documentIdToDelete && EditStatusMobile && EditStatusKey) {
            try {
                const documentRefToDelete = ref(database, `Data/OwnerListUser/Withdrawal/${documentIdToDelete}`);
                const EditRecord = ref(database, `Data/User/${EditStatusMobile}/Record/${EditStatusKey}`);
                
                // Update record status to "Complete"
                await update(EditRecord, { Status: "Complate" });
                
                // Delete document from OwnerListUser
                await WithdrawalDelete(documentRefToDelete);
                
                alert("Order Complate");
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("An error occurred while deleting the document.");
            }
        } else {
            alert("Missing required attributes for deletion.");
        }
    }
});

// Function to delete user from owner
async function WithdrawalDelete(docRef) {
    try {
        await remove(docRef);
        alert("Successfully deleted!");
    } catch (error) {
        console.error(error);
        console.log(error);
    }
}

// Fetch and render deposit data
onValue(ref(database, "Data/OwnerListUser/Withdrawal"), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        let childDate = childSnapshot.val();
        let {GameUser, UPI, Amount, UserKey} = childDate;
        let key = childSnapshot.key;

        let DepositTableRow = renderWithdrawalTableRow(GameUser, Amount,UPI, key, UserKey);
        WithdrawalTable.innerHTML += DepositTableRow;
    }); 
});


LoginBtn.addEventListener("click", async function (e) {
	e.preventDefault();
	const mobileNumber = document.getElementById("LoginMobileNumber").value + "@gmail.com";
	const password = document.getElementById("LoginPassword").value;

	try {
	const userCredential = await signInWithEmailAndPassword(auth, "Admin"+mobileNumber, password);
	const user = userCredential.user;
	console.log("Success! Welcome back!");
	alert("Login Successfully ! Welcome back!");
	localStorage.setItem("UserMobile", mobileNumber.replace("@gmail.com", ""))
	AdminLoginPage.style.display = "none";
	AdminHomePage.style.display = "block"
	} catch (error) {
	console.log(error);

  if(error.code == "auth/invalid-email"){
    alert("Please Check Your Mobile Number")
  }

  if(error.code == "auth/missing-password"){
    alert("Wrong Password:- Please Check Your Password")
  }

  if(error.code == "auth/invalid-login-credentials"){
    alert("Mobile Number Not Registred Please Create a New Account")
  }

	}
	});


    auth.onAuthStateChanged((user) => {
        if (user) {
            AdminLoginPage.style.display = "none";
          AdminHomePage.style.display = "block";
            }
        else {
            AdminLoginPage.style.display = "block";
            AdminHomePage.style.display = "none";
        }
        });
    

let UserPage = document.querySelector("#UserPage");
let DipositePage = document.querySelector("#DipositePage");
let WithdrawalPage = document.querySelector("#WithdrawalPage");

let ManageUser = document.querySelector("#ManageUser");
let ManageDiposite = document.querySelector("#ManageDiposite");
let ManageWithdrawal = document.querySelector("#ManageWithdrawal");

let WelcomeText = document.getElementById("WelcomeText")

ManageUser.addEventListener('click', function(){
    UserPage.style.display = "block";
    DipositePage.style.display = "none";
    WithdrawalPage.style.display = "none";
    WelcomeText.style.display = "none";
})

ManageDiposite.addEventListener('click', function(){
    UserPage.style.display = "none";
    DipositePage.style.display = "block";
    WithdrawalPage.style.display = "none";
    WelcomeText.style.display = "none";
})

ManageWithdrawal.addEventListener('click', function(){
    UserPage.style.display = "none";
    DipositePage.style.display = "none";
    WithdrawalPage.style.display = "block";
    WelcomeText.style.display = "none";
})
