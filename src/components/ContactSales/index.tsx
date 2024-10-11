import { Check2 } from 'components/Icons'
import Layout from 'components/Layout'
import Link from 'components/Link'
import SEO from 'components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useValues } from 'kea'
import { layoutLogic } from 'logic/layoutLogic'
import KeyboardShortcut from 'components/KeyboardShortcut'
import SalesforceForm from 'components/SalesforceForm'
import TeamMember from 'components/TeamMember'

const features = [
    'Volume discounts',
    'SAML SSO',
    'Custom MSA',
    'Dedicated support',
    'Personalized onboarding',
    'Advanced permissions & audit logs',
]

export default function ContactSales({ location }) {
    const search = location?.search
    const params = new URLSearchParams(search)
    const { websiteTheme } = useValues(layoutLogic)
    const darkMode = websiteTheme === 'dark'
    return (
        <Layout>
            <SEO
                title="Talk to a human - PostHog"
                description="PostHog is self-serve, but you can talk to a real person if you need to!"
                image={`/images/og/talk-to-a-human.png`}
            />

            <div className="lg:py-12 py-4 px-5">
                <section className="mb-12">
                    <div className="text-center">
                        <StaticImage
                            loading="eager"
                            placeholder="none"
                            width={750}
                            alt="Sales hedgehogs"
                            src="./images/sales-hogs.png"
                        />
                        <h1 className="text-3xl md:text-5xl mt-4 mb-2">Let's chat</h1>
                        <p className="m-0">
                            PostHog Cloud is self-serve (
                            <Link to="https://app.posthog.com/signup">get started here</Link>), but we’re here to chat
                            if you have bespoke needs.
                        </p>
                    </div>
                </section>
                <section className="grid md:grid-cols-2 max-w-5xl mx-auto md:gap-x-16 gap-y-12">
                    <div className="order-2 md:order-1">
                        <h3 className="text-lg mt-1 mb-4">Benefits of an enterprise plan:</h3>
                        <ul className="list-none m-0 p-0 mt-2 grid sm:grid-flow-col sm:grid-rows-3 space-y-1">
                            {features.map((feature) => {
                                return (
                                    <li key={feature} className="flex space-x-2">
                                        <Check2 className="w-4 opacity-60" />
                                        <span>{feature}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className="text-lg mt-12 mb-4">Quick demo first?</h3>
                        <div className="space-y-3">
                            <TeamMember name="Mine Kansu" photo />, from our Sales team, made this demo video. If you're
                            short on time and need to see what PostHog has to offer, check it out!
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/2jQco8hEvTI"
                                className="rounded shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="mb-1">Contact us</h3>
                        <p className="text-sm">
                            <strong>Tip:</strong> Press <KeyboardShortcut text="Tab" size="sm" /> to advance through the
                            form at a breakneck pace!
                        </p>
                        <SalesforceForm
                            type="lead"
                            form={{
                                fields: [
                                    {
                                        label: 'Email',
                                        type: 'string',
                                        name: 'email',
                                        required: true,
                                        fieldType: 'email',
                                    },
                                    {
                                        label: 'Company',
                                        type: 'string',
                                        name: 'company',
                                        required: true,
                                    },
                                    {
                                        label: 'Role',
                                        name: 'role',
                                        type: 'enumeration',
                                        options: [
                                            {
                                                label: 'Engineering',
                                                value: 'Engineering',
                                            },
                                            {
                                                label: 'Founder',
                                                value: 'Founder',
                                            },
                                            {
                                                label: 'Leadership',
                                                value: 'Leadership',
                                            },
                                            {
                                                label: 'Marketing',
                                                value: 'Marketing',
                                            },
                                            {
                                                label: 'Other',
                                                value: 'Other',
                                            },
                                            {
                                                label: 'Product',
                                                value: 'Product',
                                            },
                                            {
                                                label: 'Sales',
                                                value: 'Sales',
                                            },
                                        ],
                                        required: true,
                                    },
                                    {
                                        label: 'Monthly active users',
                                        name: 'monthly_active_users',
                                        type: 'string',
                                        fieldType: 'number',
                                        required: true,
                                    },
                                    {
                                        label: 'What do you want to talk about on the call?',
                                        name: 'talk_about',
                                        type: 'string',
                                        required: true,
                                    },
                                ],
                                buttonText: 'Submit',
                                message: "Message received. We'll be in touch!",
                                name: 'Contact sales',
                            }}
                        />
                    </div>
                </section>
            </div>
        </Layout>
    )
}
