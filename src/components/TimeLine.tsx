// Importing Timeline component
import { Timeline } from './ui/TimeLine';

// Import Images
// import College2 from '../assets/College2.png';
// import College3 from '../assets/College3.png';

function TimelineDemo() {
    const data = [
        {
            title: 'Day 1: 15th February, 2025',
            content: (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Day 1: 15th February, 2025
                    </h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Welcome and reception/Breakfast:</strong> 9
                            AM to 10 AM
                        </li>
                        <li>
                            <strong>
                                Visit to MITS for the PGDMIT 1998-200 batch:
                            </strong>{' '}
                            10 AM to 12 noon
                        </li>
                        <li>
                            <strong>Campus Visit and Sports Activities:</strong>{' '}
                            10 AM to 1 PM
                        </li>
                        <li>
                            <strong>Lunch:</strong> 1 to 2:30 PM
                        </li>
                        <li>
                            <strong>Plantation Drive:</strong> 2:30 PM to 3 PM
                        </li>
                        <li>
                            <strong>
                                Formal Inauguration of the Alumni Meet:
                            </strong>{' '}
                            3 PM to 4 PM
                        </li>
                        <li>
                            <strong>
                                Felicitation of the Founding batch Silver
                                Jubilee Batch PGDMIT 1998-2000
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Batch Video of the founding batch PGDMIT
                                1998-2000
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Felicitation of the Crystal Jubilee Batches
                                (2010 Graduates):
                            </strong>{' '}
                            PhDs, IPG 2005-2010, MTech 2008-2010, and MBA
                            2008-2010
                        </li>
                        <li>
                            <strong>IIITM Gwalior over the years:</strong> A
                            video journey
                        </li>
                        <li>
                            <strong>Launch of the Alumni Directory</strong>
                        </li>
                        <li>
                            <strong>Launch of the Alumni Cell</strong>
                        </li>
                        <li>
                            <strong>Launch of Alumni Cards</strong>
                        </li>
                        <li>
                            <strong>Open House with the students:</strong> 4 PM
                            to 6 PM
                        </li>
                        <li>
                            <strong>Cultural Evening and Gala Dinner:</strong> 6
                            PM onwards
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: 'Day 2: 16th February, 2025',
            content: (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Day 2: 16th February, 2025
                    </h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Breakfast:</strong> 9 AM to 10 AM
                        </li>
                        <li>
                            <strong>Hybrid Batch Meetup:</strong> 10 AM to 11:30
                            AM
                        </li>
                        <li>
                            <strong>
                                Open House with the Director and Faculty (Hybrid
                                Mode):
                            </strong>{' '}
                            12 noon to 1:30 PM
                        </li>
                        <li>
                            <strong>Institute Alumni Relations</strong>
                        </li>
                        <li>
                            <strong>Focus Groups</strong>
                        </li>
                        <li>
                            <strong>
                                Structuring the Alumni Association and
                                Signatories
                            </strong>
                        </li>
                        <li>
                            <strong>Local and International Chapters</strong>
                        </li>
                        <li>
                            <strong>Lunch:</strong> 1:30 PM to 3 PM
                        </li>
                        <li>
                            <strong>
                                Talks (Distinguished Alumni Awardees Talks &
                                Alumni Connect Talks):
                            </strong>{' '}
                            3 PM to 5 PM
                        </li>
                        <li>
                            <strong>Distinguished Alumni Awardees Talks</strong>
                        </li>
                        <li>
                            <strong>
                                Alumni Connect Talks (AI/ML, software,
                                electronics, management, corporate guidance,
                                startups, governance, higher studies)
                            </strong>
                        </li>
                        <li>
                            <strong>
                                Closing Ceremony of the Alumni Meet:
                            </strong>{' '}
                            5 PM to 6 PM
                        </li>
                        <li>
                            <strong>Distinguished Alumni Awards</strong>
                        </li>
                        <li>
                            <strong>Dinner:</strong> 8 PM onwards
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full bg-white">
            <Timeline data={data} />
        </div>
    );
}

export default TimelineDemo;
