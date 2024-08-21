import React, { useState, useEffect } from 'react';

// import { Container } from './styles';
import styles from './formPersonal.module.css'
import { CheckBox, ContainerInput } from './formPersonal';
import ImageBaner from '../../assets/imgs/arte.png'
import Image from 'next/image';

import { useRouter } from 'next/router';
import Modal from '../Modal';


interface PropsForm {
    name: string;
    objective: string;
    city: string;
    personal: boolean;
    consultoria: boolean;
}
interface ObjectChecked {
    checked: boolean;
    name: string;
}
interface StateChecked {
    personal?: ObjectChecked;
    consultoria?: ObjectChecked;
}
const FormPersonal: React.FC = () => {
    const route = useRouter()
    const [checked, setChecked] = useState<StateChecked>({
        consultoria: {
            checked: false,
            name: 'consultoria'
        },
        personal: {
            checked: false,
            name: 'personal'
        }
    })
    const [show, setShow] = useState(false)
    const [initialValue, setInitialValue] = useState<PropsForm>({
        city: '',
        name: '',
        objective: '',
        personal: false,
        consultoria: false
    })
    const [width, setWidth] = useState<number>(0)
    const [heigth, setHeigth] = useState<number>(0)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setWidth(document.documentElement.clientWidth)
            setHeigth(document.documentElement.clientHeight)

        }
    }, [])
    const subdomain = width > 768 ? 'web' : 'api'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const phone = "5531993701153"
        const text = `
            *Studio Artec*\n-------------------------------------\n _Requerimento de Serviço_\n-------------------------------------\n *_Tipo de Atendimento_*\n${initialValue.consultoria ? "Manutenção Corretiva" : ""}${initialValue.personal ? "Manutenção Preventiva" : ""}\n-------------------------------------\n*Nome:* ${initialValue.name}\n*Defeito Descrito:* ${initialValue.objective}\n*Carro/Ano:* ${initialValue.city}}
        `
        route.push(`https://${subdomain}.whatsapp.com/send?phone=${phone}&text=${encodeURI(text)}`)

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
        if (e.target.type === 'checkbox') {
            setChecked({

                [e.target.name]: {
                    checked: e.target.checked,
                    name: e.target.name
                }
            })

            if (e.target.name === 'personal') {
                setInitialValue({
                    ...initialValue,
                    personal: e.target.checked,
                    consultoria: false
                })
            } else {
                setInitialValue({
                    ...initialValue,
                    consultoria: e.target.checked,
                    personal: false
                })
            }
        } else {
            setInitialValue({
                ...initialValue,
                [e.target.name]: e.target.value
            })
        }
    }

    return (
        <>

            <div className={styles.container}>
                <h2 style={{ fontSize: 20 }}>Adicione os dados do atendimento</h2>
                <div className={styles.subContainer}>
                    {
                        width > 765 && (
                            <Image
                                width={ImageBaner.width / 3.5}
                                height={ImageBaner.height / 4}
                                alt=''
                                style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                                src={ImageBaner}
                            />
                        )
                    }
                    <div className={styles.containerForm}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <div style={{
                                    display: 'flex', flexDirection: 'column',
                                    justifyContent: 'center',
                                    textAlign: 'center'
                                }}>
                                    <p>Atendimento de interesse</p>
                                    <div className={styles.containerChecks}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <CheckBox
                                                checked={checked?.personal?.checked}
                                                style={{ width: 15, height: 15 }}
                                                type="checkbox"
                                                name="personal"

                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                                id="personal" />
                                            <label htmlFor="Personal" style={{ fontSize: 18 }}>Manutenção Preventiva</label>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} >
                                            <CheckBox
                                                style={{ width: 15, height: 15 }}
                                                type="checkbox"
                                                checked={checked?.consultoria?.checked}
                                                name="consultoria"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                                id="consultoria" />
                                            <label htmlFor="Personal" style={{ fontSize: 18 }}>Manutenção Corretiva</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <ContainerInput>
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={initialValue.name}
                                    onChange={(e) => handleChange(e)}
                                    required />
                            </ContainerInput>
                            <ContainerInput>
                                <label htmlFor="objetivo">Defeito Descrito</label>
                                <textarea
                                    value={initialValue.objective}


                                    onChange={(e) => handleChange(e as any)}
                                    name="objective"
                                    id="objective"
                                />
                            </ContainerInput>
                            <ContainerInput>
                                <label htmlFor="cidade">Carro/Ano</label>
                                <input
                                    type="text"
                                    name="city"
                                    onChange={(e) => handleChange(e)}
                                    value={initialValue.city}
                                    id="city"
                                    required />
                            </ContainerInput>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type='submit' className={styles.buttonSubmit}>Enviar para o WhatsApp!</button>

                            </div>
                        </form>
                    </div>
                    {
                        width < 765 && (
                            <Image
                                width={ImageBaner.width / 3.5}

                                alt=''
                                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                                src={ImageBaner}
                            />
                        )
                    }

                </div>
            </div>
        </>
    );
}

export default FormPersonal;