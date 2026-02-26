import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: "Contact Our Global Team | SignalBridge Insights",
    description: "Initialize your research inquiry or join our elite network. Direct priority channel to our specialized research team with < 12 hour response time.",
};

export default function Contact() {
    return <ContactClient />;
}
