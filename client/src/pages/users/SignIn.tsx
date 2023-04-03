import React from "react";
import { Formik, Form, FormikHelpers, Field } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const newUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type UserForm = z.infer<typeof newUserSchema>;

const SignIn: React.FC = () => {
  const handleSubmit = (
    { email, name }: UserForm,
    helpers: FormikHelpers<UserForm>
  ) => {
    helpers.resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={toFormikValidationSchema(newUserSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack direction='column'>
            <Typography variant='h1'>Créer un compte</Typography>
            <Field name='name' as={TextField} label='Nom' />
            <Field name='email' as={TextField} margin='normal' label='Email' />
            <Button variant='contained' fullWidth sx={{ mt: 4 }}>
              Je m'inscris!
            </Button>
            <Typography mt={2}>
              Vous avez déjà un compte ?{" "}
              <Link component={RouterLink} to='/sign-in'>
                Connectez-vous
              </Link>
            </Typography>
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignIn;
