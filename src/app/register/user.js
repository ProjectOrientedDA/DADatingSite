class user {
    // constructor(username, email, firstName, lastName, age) {
    //     this.username = username;
    //     this.email = email;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    constructor(username) {
        this.username = username;
    }

    // function user(first, last, age, eyecolor) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eyecolor;
    //     this.nationality = "English";
    //   }

    // Method to get the full name of the user
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method to get the user's age
    getAge() {
        return this.age;
    }

    // Method to generate the profile page URL for the user
    getProfilePageUrl() {
        return `/profile/${this.username}`;
    }

    // Method to render the profile page for the user
    renderProfilePage() {
        // Render profile page UI with user's information
        // Example: 
        return `
            <div>
                <h1>${this.getFullName()}</h1>
                <p>Email: ${this.email}</p>
                <p>Age: ${this.age}</p>
                <!-- Other profile information and UI elements -->
            </div>
        `;
    }
}

// Example usage:
const user1 = new user('john_doe', 'john@example.com', 'John', 'Doe', 30);
console.log(user1.getFullName()); // Output: John Doe
console.log(user1.getProfilePageUrl()); // Output: /profile/john_doe
console.log(user1.renderProfilePage()); // Output: Rendered profile page HTML/UI
