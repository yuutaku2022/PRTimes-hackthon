import SettingsClient from './SettingsClient';
import { COMPANY_ID } from './_hooks/useCompanyInfo';

export default async function SettingsPage() {
  try {
    const res = await fetch(`/api/companies/${COMPANY_ID}`, { cache: 'no-store' });
    let initialCompany = null;
    if (res.ok) {
      initialCompany = await res.json();
    }
    return <SettingsClient initialCompany={initialCompany} />;
  } catch (e) {
    return <SettingsClient initialCompany={null} />;
  }
}
