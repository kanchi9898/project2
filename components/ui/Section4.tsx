import React from 'react'
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa'
import Container from './Container'

const Section4 = () => {
  return (
    <Container>
        <div className="w-full flex flex-col items-center justify-center">

        <div className="flex flex-col gap-3 items-center justify-center p-5 w-full md:w-[70%]">
          <h1 className="text-dblue text-[30px] md:text-[32px] font-bold md:font-semibold">The Core of Our Team</h1>
          <p className="text-lgray text-center">Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">

          <div className="flex gap-2 flex-col">
            <img className="w-[384px] h-[370px] rounded-[2px]" src="https://s3-alpha-sig.figma.com/img/ee5e/d0fe/287f5c7f001f3f3ccfd70ff4efd383a0?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C5enUV4DOOdW8A~Tv4Q9YxlNd8rOfq5U7R3MGVHIdX0VNtQ4pT29ADZQEBPKSd1lGItsaNRF~jWbz20MjIQOW8ezd8xPReHe0upcPZNarJVF~cDhuoQYBt21r8bgA783Ko-9UCXDKdUs9vgfbzhphZdqP7mRcep67VdmsTBvhLZMT53U0uzFvgSLWLrfAo9~Ql6DA4E4T1zvJetXlLjJtNCBNC95Et5-8td0-qJmOwJh3jXuznpbRVFkRAaLFSygpU-98ErDS4~FGNnxcBMwFNAkTvG5z1RylBmumzU52k6zewx09-hz3w32tKhYZxWO6qgC7ZxRXD-S7721a3DlrA__" alt="img1" />
            <h1 className="text-dblue font-semibold text-[5vw] md:text-[2vw] lg:text-[1.5vw]">Morgan Drew</h1>
            <span className="text-lgray">Manager</span>
            <div className="flex gap-3">
            <FaTwitter size={25} className="text-dblue"/>
            <FaFacebook size={25} className="text-dblue"/>
            <FaLinkedin size={25} className="text-dblue"/>
            <FaTelegram size={25} className="text-dblue"/>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <img className="w-[384px] h-[370px] rounded-[2px]" src="https://s3-alpha-sig.figma.com/img/b458/ecbc/bd2cd80323072b725f36354f24c56b53?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pvj5Uk9t92JlLRDWTaKD0DzkIZyHRZ8Gqkf-e~s~gZbbJG3~vOvdusMtqFY~ETvi4EoZOmd7WrmrNw7UyxJSSRz3Oz5pspjsMmVd0FhqemSgKzFIHIWOGDqiokr6Js2i3hWpkCeTwoE7WLZii~hU0J18vk1uGQMHaCefdpz4VCQIZrWIaVSR7fnFH8PtQXaMI~3y5aKFxd~K11Lh6M7xFFrfFfp8XZK4EDQRB0jRZSeyRN6PPV9~JxJLMfGhffGXpEF9-0KdecLIqT-4AQAkZdVcC5foXsRYS1b4bnY9uaqUDVPEJ9i8W8RcLPG90Fy6dYcIBN5MUJcnBlHVnFf83A__" alt="img1" />
            <h1 className="text-dblue font-semibold text-[5vw] md:text-[2vw] lg:text-[1.5vw]">Jeffery Walker</h1>
            <span className="text-lgray">Lead Designer</span>
            <div className="flex gap-3">
            <FaTwitter size={25} className="text-dblue"/>
            <FaFacebook size={25} className="text-dblue"/>
            <FaLinkedin size={25} className="text-dblue"/>
            <FaTelegram size={25} className="text-dblue"/>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <img className="w-[384px] h-[370px] rounded-[2px]" src="https://s3-alpha-sig.figma.com/img/8d99/8df7/a82eaeb6be6d09fa9be67c286c91886d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMxYk4XNCKLnib-Rp3ukhwBc39ryO0K~99lsH32LSuc3m6KCM0p0cq4v80NU4G9TMlG1yowO-7PnC0l5iVmEF1j5aFvdJUzULD4h4LV2DioiiFn1kTy~jySkDBIGjq0VrrbeoKzxzUSWQ85uJOGcq8aeWfxRKsgMKl~Zqm5LF2~QS3OBVuajERoxRn5yNVZAPn6yNxBv~DsQ68d7z3yNyXfe8qYaKMF5E92kJbFDTNZ6J25HqRCTOc3xLXlKfzk6D~QItfSzAwKQ41NFYg2WHap5-PR3AaiuZMch2tlPq85bzrpno4qikfKX4v6XjAvewozHuVhrpLvQN13ynXnTag__" alt="img1" />
            <h1 className="text-dblue font-semibold text-[5vw] md:text-[2vw] lg:text-[1.5vw]">Andrew Steve</h1>
            <span className="text-lgray">UI/UX Designer</span>
            <div className="flex gap-3">
            <FaTwitter size={25} className="text-dblue"/>
            <FaFacebook size={25} className="text-dblue"/>
            <FaLinkedin size={25} className="text-dblue"/>
            <FaTelegram size={25} className="text-dblue"/>
            </div>
          </div>
        </div>
        </div>
        </div>
      </Container>
  )
}

export default Section4