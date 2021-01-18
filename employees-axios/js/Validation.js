class Validation {
    checkNull(value, id, field) {
        if (value.trim() === '') {
            document.getElementById(id).innerHTML = `Please fill in this ${field}!`;
            document.getElementById(id).style.display = 'block';
            return false;
        }

        document.getElementById(id).innerHTML = '';
        document.getElementById(id).style.display = 'none';
        return true;
    }

    checkAllCharacters(value, id, field) {
        const pattern = /^[A-Z a-z]+$/;
        if (!pattern.test(value.trim())) {
            document.getElementById(id).innerHTML = `${field} must be characters!`;
            document.getElementById(id).style.display = 'block';
            return false;
        }
        document.getElementById(id).innerHTML = '';
        document.getElementById(id).style.display = 'none';
        return true;
    }

    checkAllNumber(value, id, field) {
        const pattern = /^[0-9.]+$/;
        if (!pattern.test(value.trim())) {
            document.getElementById(id).innerHTML = `${field} must be number!`;
            document.getElementById(id).style.display = 'block';
            return false;
        }
        document.getElementById(id).innerHTML = '';
        document.getElementById(id).style.display = 'none';
        return true;
    }

    checkLength(value, id, field, minLen, maxLen) {
        if (value.trim().length < minLen || value.trim().length > maxLen) {
            document.getElementById(id).innerHTML = `${field} must be have ${minLen} to ${maxLen} characters!`;
            document.getElementById(id).style.display = 'block';
            return false;
        }
        document.getElementById(id).innerHTML = '';
        document.getElementById(id).style.display = 'none';
        return true;
    }

    checkValue(value, id, field, min, max) {
        if (value < min || value > max) {
            document.getElementById(id).innerHTML = `${field} must be have ${min} to ${max}`;
            document.getElementById(id).style.display = 'block';
            return false;
        }
        document.getElementById(id).innerHTML = '';
        document.getElementById(id).style.display = 'none';
        return true;
    }


}
export { Validation };