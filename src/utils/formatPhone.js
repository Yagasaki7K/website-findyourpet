function formatPhoneNumber(number) {
    // Remove all non-numeric characters from the phone number
    const cleanedNumber = number.replace(/\D/g, '');

    // Check if the number has 11 digits (including area code) and format as (XX) XXXXX-XXXX
    if (cleanedNumber.length === 11) {
        const areaCode = cleanedNumber.substring(0, 2);
        const firstPart = cleanedNumber.substring(2, 7);
        const secondPart = cleanedNumber.substring(7);
        return `(${areaCode}) ${firstPart}-${secondPart}`;
    }
    // Check if the number has 10 digits (without area code) and format as (XX) XXXX-XXXX
    else if (cleanedNumber.length === 10) {
        const areaCode = cleanedNumber.substring(0, 2);
        const firstPart = cleanedNumber.substring(2, 6);
        const secondPart = cleanedNumber.substring(6);
        return `(${areaCode}) ${firstPart}-${secondPart}`;
    }
    // Return the original number if formatting is not possible
    else {
        return number;
    }
}

export default formatPhoneNumber;