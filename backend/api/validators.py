from rest_framework.validators import (
    ValidationError
)


def validate_password(password):

    message = []
    error = False

    if len(password) < 8:
        message.append('Hasło nie może być krótsze niż 8 znaków')
        error = True

    if not any(char.isdigit() for char in password):
        message.append('Hasło musi zawierać conajmniej jedną cyfrę')
        error = True

    if not any(char.isupper() for char in password):
        message.append('Hasło musi zawierać conajmniej jedną wielką literę')
        error = True

    if not any(char in password for char in "!@#$%^&*()"):
        message.append(
            'Hasło musi zawierać conajmniej jeden ze znaków !@#$%^&*()')
        error = True

    if error:
        raise ValidationError(message)

    return True


# from rest_framework.validators import (
#     ValidationError
# )


# def validate_password(password):

#     message = {}
#     error = False

#     if len(password) < 8:
#         message['Długość'] = 'Hasło nie może być krótsze niż 8 znaków'
#         error = True

#     if not any(char.isdigit() for char in password):
#         message['Cyfra'] = 'Hasło musi zawierać conajmniej jedną cyfrę'
#         error = True

#     if not any(char.isupper() for char in password):
#         message['Wielka litera'] = 'Hasło musi zawierać conajmniej jedną wielką literę'
#         error = True

#     if not any(char in password for char in "!@#$%^&*()"):
#         message['Znak specjalny'] = 'Hasło musi zawierać conajmniej jeden ze znaków !@#$%^&*()'
#         error = True

#     if error:
#         raise ValidationError(message)

#     return True
