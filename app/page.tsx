'use client'
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillYoutube, AiFillFacebook, AiFillLinkedin} from "react-icons/ai"
import Image from "next/image";
import castel from '../public/logo-castel.png'
import croquis from '../public/croquis.jpeg'
import satelite from '../public/satelite.jpeg'
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? 'dark' : ''} bg-gray-900 px-10 md:px-20 lg:px-35`}>
      <Head>
        <title>Castel</title>
        <meta name="desription" content="Generated by"></meta>
        <link rel="icon" href="../app/favicon.ico" sizes="any" />
      </Head>

      <main className=" bg-gray-900 px-10 md:px-20 lg:px-35">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Emmanuel Fabbri</h1>
            <ul className="flex items-center">
              <li>
                < BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer"/>
              </li>
              <li><a className="bg-slate-600 text-white px-4 py-2 rounded-md ml-8" href="https://drive.google.com/uc?id=1WTc0_PRXrgjf_6wm8qLFbL_sFeq4_Fba&export=download" target="_blank">Kárdex</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-gray-100 font-medium md:text-6xl">Castel</h2>
            <h3 className="text-2xl py-2 md:text-3xl mt-10">Presentación</h3>
            <p className="text-md py-5 leading-8 text-gray-300 md:text-xl max-w-lg mx-auto">Castel es una empresa dedicada a la venta de pisos, azulejos, baños y otros materiales para la construcción y el hogar. Con el objetivo de evaluar el desempeño actual de la empresa y brindar recomendaciones para su mejora, se ha realizado una auditoría integral que abarca diversos aspectos de su operación.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-300">
            <AiFillFacebook href="https://www.facebook.com/Casteloficial"/>
            <AiFillLinkedin href="https://www.linkedin.com/company/castel-m%C3%A9xico/"/>
            <AiFillYoutube href="https://www.youtube.com/user/designCas"/>
          </div>
          <div className="relative mx-auto w-80 h-80 mt-20 md:h-96 md:w-96">
            <Image src={castel} alt="#" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl py-1">Inventario</h3>
            <p className="text-mid py-2 leading-8">Se auditaron un total de 103 equipos de computo en las diferentes áreas de la empresa Caste. De estos equipos, 46 son laptops y 55 son equipos de escritorio. En el botón Kárdex puedes encontrar el desglose completo.</p>
            <p className="mt-5 mb-5 text-2xl">Observaciones:</p>
            <p className="text-mid py-2 leading-8">Todas las laptops del área de ventas son para uso exclusivo del personal de ventas.</p>
            <p className="text-mid py-2 leading-8">Los equipos de computo del área de sistemas incluyen 3 servidores.</p>
            <p className="text-mid py-2 leading-8">El equipo de computo del área de seguridad industrial se encuentra en una zona de alta seguridad y no fue posible realizar una auditoría completa.</p>
            <p className="text-mid py-2 leading-8">El equipo de computo del área medica se utiliza para el registro de pacientes y la gestión de historias clínicas.</p>
            <p className="mt-5 mb-5 text-2xl">Recomendaciones:</p>
            <p className="text-mid py-2 leading-8">Se recomienda realizar un mantenimiento preventivo periódico a todos los equipos de computo.</p>
            <p className="text-mid py-2 leading-8">Se recomienda actualizar el software de todos los equipos de computo a la última versión disponible.</p>
            <p className="text-mid py-2 leading-8">Se recomienda implementar un sistema de seguridad para proteger los equipos de computo contra virus y malware.</p>
            <p className="text-mid py-2 leading-8">Se recomienda realizar copias de seguridad periódicas de los datos de todos los equipos de computo.</p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl py-1 mt-40">Áreas de Oportunidad</h3>
            <p className="mt-10 mb-5 text-2xl">1. Optimización de la gestión de inventario:</p>
            <p className="mt-5 mb-5">Problema: Falta de visibilidad y control sobre el stock de productos, lo que genera roturas de stock, obsolescencia y sobrecostos.</p>
            <p className="mt-5 mb-10">Solución: Implementar un sistema de gestión de inventario que permita tener un seguimiento en tiempo real del stock, identificar productos de baja rotación y optimizar los niveles de inventario.</p>
            <p className="mt-5 mb-5 text-2xl">2. Fortalecimiento del marketing y las ventas:</p>
            <p className="mt-5 mb-5">Problema: Débil presencia en canales digitales y falta de estrategias de marketing efectivas, lo que limita el alcance de la empresa y las oportunidades de venta.</p>
            <p className="mt-5 mb-10">Solución: Desarrollar una estrategia de marketing digital integral que incluya la creación de una página web atractiva, presencia en redes sociales, campañas de marketing de contenidos y publicidad online.</p>
            <p className="mt-5 mb-5 text-2xl">3. Mejora de la atención al cliente:</p>
            <p className="mt-5 mb-5">Problema: Deficiencias en la comunicación y el servicio al cliente, lo que genera insatisfacción y pérdida de clientes.</p>
            <p className="mt-5 mb-10">Solución: Implementar un sistema de atención al cliente multicanal que permita una comunicación fluida y eficiente con los clientes, así como brindar un servicio postventa de calidad.</p>
            <p className="mt-5 mb-5 text-2xl">4. Optimización de la logística y la distribución:</p>
            <p className="mt-5 mb-5">Problema: Ineficiencias en la logística y la distribución, lo que genera retrasos en las entregas, daños en la mercancía y altos costos de transporte.</p>
            <p className="mt-5 mb-10">Solución: Evaluar y optimizar las rutas de distribución, utilizar tecnologías para la gestión de la cadena de suministro y negociar mejores condiciones con los proveedores de transporte.</p>
            <p className="mt-5 mb-5 text-2xl">5. Refuerzo de la capacitación del personal:</p>
            <p className="mt-5 mb-5">Problema: Falta de capacitación y actualización del personal en cuanto a productos, técnicas de venta y atención al cliente, lo que limita su desempeño y la productividad de la empresa.</p>
            <p className="mt-5 mb-10">Solución: Implementar un programa de capacitación continua para el personal, que incluya cursos, talleres y seminarios web sobre diversos temas relevantes para la empresa.</p>

            <h3 className="text-5xl py-1 mt-20">Propuestas</h3>
            <p className="mt-10 mb-5 text-2xl">1. Implementación de un sistema de gestión de calidad:</p>
            <p className="mt-5 mb-5">Objetivo: Certificar la empresa bajo una norma de calidad reconocida, como ISO 9001, para demostrar su compromiso con la calidad y mejorar su imagen ante clientes y proveedores</p>
            <p className="mt-5 mb-5 text-2xl">2. Desarrollo de nuevos productos y servicios:</p>
            <p className="mt-5 mb-5">Objetivo: Diversificar la oferta de productos y servicios para atender nuevas necesidades del mercado y aumentar las ventas.</p>
            <p className="mt-5 mb-5 text-2xl">3. Expansión a nuevos mercados:</p>
            <p className="mt-5 mb-5">Objetivo: Abrir nuevos canales de distribución y expandir la presencia de la empresa en nuevos mercados geográficos para aumentar la base de clientes y las oportunidades de negocio.</p>
            <p className="mt-5 mb-5 text-2xl">4. Adopción de tecnologías de la información y la comunicación:</p>
            <p className="mt-5 mb-5">Objetivo: Implementar soluciones tecnológicas que permitan optimizar la gestión de la empresa, mejorar la comunicación interna y externa y aumentar la eficiencia en todos los departamentos.</p>
            <p className="mt-5 mb-5 text-2xl">5. Fomento de una cultura de innovación:</p>
            <p className="mt-5 mb-5">Objetivo: Crear un ambiente de trabajo que fomente la creatividad y la innovación, permitiendo que los empleados propongan nuevas ideas y soluciones para mejorar la empresa.</p>
            
            <h3 className="text-5xl py-1 mt-20">Procesos</h3>
            <p className="mt-10 mb-5 text-2xl">1. Proceso de compra:</p>
            <p className="mt-5 mb-5">Problema: Falta de estandarización en el proceso de compra, lo que genera ineficiencias y retrasos.</p>
            <p className="mt-5 mb-10">Solución: Implementar un proceso de compra estandarizado que incluya la definición de criterios de selección de proveedores, la negociación de precios y condiciones de pago, y el seguimiento de las compras.</p>
            <p className="mt-5 mb-5 text-2xl">2. Proceso de producción:</p>
            <p className="mt-5 mb-5">Problema: Falta de control en el proceso de producción, lo que genera mermas, retrasos y productos de baja calidad.</p>
            <p className="mt-5 mb-10">Solución: Implementar un sistema de control de calidad en el proceso de producción que incluya la definición de estándares de calidad, la realización de inspecciones y la toma de medidas correctivas en caso de detectar problemas.</p>
            <p className="mt-5 mb-5 text-2xl">3. Proceso de distribución:</p>
            <p className="mt-5 mb-5">Problema: Ineficiencias en el proceso de distribución, lo que genera retrasos en las entregas, daños en la mercancía y altos costos de transporte.</p>
            <p className="mt-5 mb-10">Solución: Optimizar las rutas de distribución, utilizar tecnologías para la gestión de la cadena de suministro y negociar mejores condiciones con los proveedores de transporte.</p>
            <p className="mt-5 mb-5 text-2xl">4. Proceso de atención al cliente:</p>
            <p className="mt-5 mb-5">Problema: Deficiencias en la comunicación y el servicio al cliente, lo que genera insatisfacción y pérdida de clientes.</p>
            <p className="mt-5 mb-10">Solución: Implementar un sistema de atención al cliente multicanal que permita una comunicación fluida y eficiente con los clientes, así como brindar un servicio postventa de calidad.</p>
            <p className="mt-5 mb-5 text-2xl">5. Proceso de postventa:</p>
            <p className="mt-5 mb-5">Problema: Falta de seguimiento a los clientes después de la venta, lo que limita la fidelización y las oportunidades de venta cruzada.</p>
            <p className="mt-5 mb-10">Solución: Implementar un proceso de postventa que incluya el seguimiento a los clientes, la gestión de las garantías</p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-5xl py-1 dark:text-white ">Ubicación del CEDIS Auditado</h3>
            <p className="mt-10 mb-5 text-2xl">Dirección:</p>
            <p className="text-md py-2 leading-8">País: México</p>
            <p className="text-md py-2 leading-8">Estado: Estado de México</p>
            <p className="text-md py-2 leading-8">Municipio: Tlalnepantla de Baz</p>
            <p className="text-md py-2 leading-8">Colonia: La Loma</p>
            <p className="text-md py-2 leading-8">Código Postal: 54060</p>
            <p className="text-md py-2 leading-8">Calle: Avenida Prolongación Fulton #2</p>
            <p className="text-md py-2 leading-8">La ubicación del CEDIS auditado es adecuada para las operaciones de la empresa. Sin embargo, se recomienda actualizar la información de ubicación en los canales de comunicación de la empresa.</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image src={croquis} alt="#" className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
            <Image src={satelite} alt="#" className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive"/>  
            </div>
          </div>
          <div>
            <h3 className="text-center pt-10">_________________</h3>
          </div>
        </section>
      </main>
    </div>
  )
}
