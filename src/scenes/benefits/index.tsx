import Htext from '@/shared/HText'
import { SelectedPage, BenefitType } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the art facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, odit."
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of diverse classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, odit."
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and pro trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, odit."
    }

]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20 '>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            <motion.div className='md:my-5 md:w-3/5' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                <Htext>
                    MORE THAN JUST GYM.
                </Htext>
                <p className='my-5 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia natus ad quasi animi, dignissimos blanditiis dolor labore magnam fuga rem maiores officia commodi iure tempore repellendus temporibus debitis. Nobis cum, fugit quia fugiat officiis praesentium animi vel laudantium hic corrupti tempora ducimus accusamus temporibus saepe laboriosam consequatur ut iste voluptates!</p>
            </motion.div>
            {/* Benfits section */}
            <div className='md:flex mt-5 items-center justify-between gap-8'>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} />
                ))}
            </div>
            {/* Graphics */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/*Image */}
                <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className='mx-auto'/>
                {/* descripttion */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                                <Htext>
                                    Millions Of Happy Members{" "}
                                    <span className='text-primary-500'>FIT.</span>
                                </Htext>
                            </motion.div>
                        </div>
                    </div>
                    {/* description */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{delay:0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                        <p className='my-5 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur, provident sint dolore tempora repudiandae quae impedit quo architecto. Ducimus, neque tenetur. Porro, voluptas. Veritatis tenetur illo rem facilis a id, aliquid odio nemo nesciunt quo consectetur perspiciatis perferendis quibusdam?
                        </p>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, quibusdam voluptatum provident tempora cumque sequi nemo! Cumque doloremque et animi?</p>
                    </motion.div>
                    {/* button */}
                    <div className='relative mt-16'>
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                        
                    </div>
                </div>
            </div>
        </motion.div>

    </section>
)


export default Benefits