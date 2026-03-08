const firstname = "Alain";
const lastname = "Vaillancourt";
const suffix = "Portfolio";

const BaseData = {
	firstname: firstname,
	lastname: lastname,
	suffix,
	get fullname() {
		return `${firstname} ${lastname}`;
	}
};

export default BaseData;
