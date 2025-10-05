import React from "react";
import AccountCard from "../Components/AccountCard";
import { CgProfile } from "react-icons/cg";
import { FiLock, FiBell, FiCreditCard, FiHelpCircle } from "react-icons/fi";

export default function Account() {
    return (
        <>
            <div className='relative top-3 left-0 px-4 py-2 border-b-4 border-green-500'>
                <h1 className='text-2xl font-bold'>ACCOUNT SETTINGS</h1>
            </div>

            <div className='px-2 flex flex-col justify-center gap-4 pb-16'>
                <AccountCard title='PROFILE' description='Profile picture, name, email...' icon={CgProfile} />
                <AccountCard title='SECURITY' description='Change password, 2FA, login activity' icon={FiLock} />
                <AccountCard title='NOTIFICATIONS' description='Manage alerts, preferences' icon={FiBell} />
                <AccountCard title='BILLING' description='Payment methods, plans' icon={FiCreditCard} />
                <AccountCard title='SUPPORT' description='Contact us, help center' icon={FiHelpCircle} />
            </div>
        </>
    );
}
