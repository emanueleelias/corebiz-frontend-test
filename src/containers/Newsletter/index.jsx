
import { useState } from 'react';
import { useFormik } from "formik";
import { useAddNewsletterMutation } from '../../store/apis/newsletterApi';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../components/Spinner/Spinner';
import Input from '../../components/Input';
import * as Yup from "yup";
import "./newsletter.scss";
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {

  const [ isLoadingButton, setIsLoadingButton ] = useState(false);

  const notifySuccess = () => toast.success('¡Genial!, haz agregado el producto al carrito.', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyError = () => toast.error('Lo siento, algo no salio bien.', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const [ sucription ] = useAddNewsletterMutation();
  
  const required = "Campo obligatorio";
  
  const formik = useFormik({

      initialValues: {
        name: "",
        email: "",
      },
      validationSchema: Yup.object({
          email: Yup.string().email("El correo ingresado no es valido").required(required),
          name: Yup.string().min(4, "La cantidad mínima de caracteres es 4").required(required),
      }),

      onSubmit: async (values) => {
        try {
          setIsLoadingButton(!isLoadingButton);
          await sucription(values).unwrap();
          formik.resetForm();
          setTimeout(() => {
            setIsLoadingButton(false);
          }, 1500);
          notifySuccess();
        } catch (error) {
          notifyError();
        }

      },
  });
  
  const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm } = formik;

  return (
    <div className='newsletter'>
      <h2>¡Únete a las novedades y promociones!</h2>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          name="name"
          errors={errors.name}  
          handleChange={handleChange} 
          handleBlur={handleBlur}
          values={values.name}
          touched={touched.name}
          placeholder="Ingresa tu nombre"
        />

        <Input 
          name="email"
          errors={errors.email}  
          handleChange={handleChange} 
          handleBlur={handleBlur}
          values={values.email}
          touched={touched.email}
          placeholder="Ingresa tu mail"
        />

        <button type='submit' disabled={ isLoadingButton ? true : false } className="button">{ isLoadingButton ? <Spinner /> : "Suscribirme" }</button>
      </form>  
      <ToastContainer />
    </div>
  )
}

export default Newsletter;