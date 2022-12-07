import React from "react";
import TeamCard from "../components/TeamCard";
import video from "../assets/video.mp4";
import NoimageCard from "../components/NoimageCard";

function Team() {
  return (
    <section className="bg-slate-900 flex flex-col">
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
          VTAPP Team
        </h1>

        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
        </div>

        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            imageUrl="https://vit.ac.in/sites/default/files/VISWANATHAN_0.jpg/"
            name="DR. G. VISWANATHAN"
            designation="Chancellor"
          />
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto ">
        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            name="MR. SANKAR VISWANATHAN"
            imageUrl="https://vit.ac.in/system/files/vp.jpg"
            designation="Vice - President"
          />
          <TeamCard
            name="DR. SEKAR VISWANATHAN"
            imageUrl="https://vit.ac.in/sites/default/files/SEKAR_VISWANATHAN1.jpg"
            designation="Vice - President"
          />
          <TeamCard
            name="MR. G V SELVAM"
            imageUrl="https://vit.ac.in/system/files/gvs.jpg"
            designation="Vice - President"
          />
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto ">
        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            name="Dr. Sandhya Pentareddy"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2020/12/Sandhya-Madam.jpg"
            designation="Executive Director"
          />
          <TeamCard
            name="Ms. Kadhambari S. Viswanathan"
            imageUrl="https://chennai.vit.ac.in/wp-content/uploads/2020/11/avp.jpg"
            designation="Assistant Vice - President"
          />
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto ">
        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            name="Dr. S. V. Kota Reddy"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2020/12/SV-Kota-Reddy-Sir.jpg"
            designation="Vice Chancellor"
          />
          <TeamCard
            name="Dr. Jagadish Chandra Mudiganti"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2022/10/Registrar-scaled.jpg"
            designation="Registrar"
          />
        </div>
      </div>

      <div className="container px-6 py-10 mx-auto ">
        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            name="Dr. Sibi Chakkaravarthy Sethuraman"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-S.-SIBI-CHAKRAVARTY.jpg"
            designation="Convener"
          />

          <TeamCard
            name="Dr. Anupama Namburu"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-ANUPAMA-NAMBURU.jpg"
            designation="Deputy Director, Student Welfare"
          />
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto ">
        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            name="Dr. Hussain Syed"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2020/07/Dr.-HUSSAIN-SYED.jpg"
            designation="Co Convenor (SCOPE)"
          />

          <TeamCard
            name="Dr. Ellison M S"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-SUDHA-ELLISON-MATHE.jpg"
            designation="Co Convenor (SENSE)"
          />

          <TeamCard
            name="Dr. Pankaj Balakrishna Tambe"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-PANKAJ-BALAKRISHNA-TAMBE.jpg"
            designation="Co Convenor (SMEC)"
          />
        </div>
      </div>
      {
        // Co Convenor (VSB)	Dr. Vikas Mehra	7	https://vitap.ac.in/wp-content/uploads/2020/01/vikas.jpg
        // Co Convenor (VSL)	Prof. Avin Tiwari	7	https://vitap.ac.in/wp-content/uploads/2022/05/Mr-AVIN-TIWARI.jpg
        // Co Convenor (VISH)	Dr. Tannistha Dasgupta	7	https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-TANNISTHA-DASGUPTA.jpg
        // Co Convenor (SAS)	Dr. Yada Nandukumar	7	https://vitap.ac.in/wp-content/uploads/2020/08/Yada_70192.jpg
      }
      <div className="container px-6 py-10 mx-auto ">
        <div className="flex flex-wrap justify-center mt-6">
          <TeamCard
            name="Dr. Vikas Mehra"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2020/01/vikas.jpg"
            designation="Co Convenor (VSB)"
          />

          <TeamCard
            name="Prof. Avin Tiwari"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2022/05/Mr-AVIN-TIWARI.jpg"
            designation="Co Convenor (VSL)"
          />

          <TeamCard
            name="Dr. Tannistha Dasgupta"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-TANNISTHA-DASGUPTA.jpg"
            designation="Co Convenor (VISH)"
          />

          <TeamCard
            name="Dr. Yada Nandukumar"
            imageUrl="https://vitap.ac.in/wp-content/uploads/2020/08/Yada_70192.jpg"
            designation="Co Convenor (SAS)"
          />
        </div>
      </div>
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-white">
          Support Team
        </h1>

        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
        </div>

        <div className="container px-6 py-10 mx-auto ">
          <div className="flex flex-wrap justify-center mt-6">
            <TeamCard
              name="Sai kiran"
              imageUrl="https://i.ibb.co/W0Fmk85/Whats-App-Image-2022-12-06-at-5-12-29-PM-1.jpg"
              designation="Chief Financial Officer"
            />

            <TeamCard
              name="A. Sekhar"
              imageUrl="https://i.ibb.co/fMMZdgQ/Screenshot-2022-12-07-at-11-22-32-AM.png"
              designation="Accountant"
            />

            <TeamCard
              name="Chandrasekar"
              imageUrl="https://i.ibb.co/YWJmVpj/Whats-App-Image-2022-12-06-at-5-37-01-PM-1.jpg"
              designation="purchase officer"
            />

            <TeamCard
              name="Haritha P"
              imageUrl="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              designation="Senior Manager, HR"
            />
            <TeamCard
              name="Dr. E. Ajith Jubilson"
              imageUrl="https://vitap.ac.in/wp-content/uploads/2019/06/Mr.-E.-AJITH-JUBILSON.jpg"
              designation=""
            />
            <TeamCard
              name="Dr. R. Nandha Kumar"
              imageUrl="https://vitap.ac.in/wp-content/uploads/2020/08/Nandha_70079.jpg"
              designation=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
