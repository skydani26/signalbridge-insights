import { Metadata } from 'next';
import ForClientsClient from './ForClientsClient';

export const metadata: Metadata = {
    title: "Institutional Research Solutions for Clients",
    description: "Precision-engineered engagement formats for institutional decision makers. Expert calls, surveys, and global research depth.",
};

export default function ForClients() {
    return <ForClientsClient />;
}
