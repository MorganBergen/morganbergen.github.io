/*
 *	candidate technical interview guide - object oriented
 *	candidate example
 *	share with candidate via teams screen share r hard copy in live interview
 *	ask a candidate the following questions
 *
 *	1.  what would you change about this code
 *
 * 	I would add a constructor to the class to initialize the variables
 *
 *	2.  how would you add () - to the phone number
 *	
 *
 *
 *
 *	3.  how would you handle a third gender or a gender that is not defined?
 *
 *	I would decale and define a new object of type Sex and add it to the enum
 *	and define two more variables that would be NAG or NAGender or Non-binary
 */


// import java.util.Scanner;

public enum Gender {
	Male,
	Female
}

public enum PersonType {
	Patient,
	Physician,
	Nurse,
	Staff
}

public class Person {
	public int ID;
	public PersonType type;
	// string is not a privitive data type thus must be capitalized
	public String name;
	public string address;
	public string city;
	public string state;
	public int zip;
	public Gender gender;
	public String dateOfBirth;
	
	// in order to alter the phone number you would need to add a method
	// this method would need to change the data type from long to an array of chars
	public long phoneNumber;


	public long ssn;
	// this is an array of object type Allergy
	public Allergy[] allergies;
	// this is an array of object type Medication
	public Medication[] medications;
	
	// Assume all getters and setters are implemented correctly
	// Assume Allergy and Medication classes are implemented correctly
	
}

int main() {

	// given that phone number is an array of chars
	for(int i = 0; i < phoneNumber.length; i++) {
		if (phoneNumber[i] == 0) {
			phoneNumber[i] += '(';
		} if (phoneNumber[i] == 3) {
			phoneNumber[i] += ')';
		} if (phoneNumber[i] == 6) {
			phoneNumber[i] = phoneNumber[i] + "-";
		}
	}
}













