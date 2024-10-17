import Logo from "@/assets/Logo.png"


function Footer() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-conntent mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestias veritatis illo autem velit illum error numquam excepturi molestiae labore?</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa oci</p>
                    <p className="my-5">eti oco oci</p>
                    <p>clopper ata</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="mt-5">tempes uni ri oci</p>
                    <p className="">(333)425-6825</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer