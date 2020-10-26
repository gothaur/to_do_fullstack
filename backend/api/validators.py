from rest_framework.validators import (
    ValidationError
)


def validate_length(password):
    if len(password) < 8:
        raise ValidationError(
            'Hasło nie może być krótsze niż 8 znaków'
        )


def validate_digit(password):
    if not any(char.isdigit() for char in password):
        raise ValidationError(
            "Hasło musi zawierać conajmniej jedną cyfrę"
        )


def validate_upper(password):
    if not any(char.isupper() for char in password):
        raise ValidationError(
            "Hasło musi zawierać conajmniej jedną wielką literę"
        )


def validate_special_character(password):
    if not any(char in password for char in "!@#$%^&*()"):
        raise ValidationError(
            'Hasło musi zawierać conajmniej jeden ze znaków !@#$%^&*()'
        )


def validate_password(password):

    validators = [
        validate_length,
        validate_digit,
        validate_upper,
        validate_special_character,
    ]

    for validator in validators:
        validator(password)
    return True
