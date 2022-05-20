import React from 'react';

const Blogs = () => {
    return (
        <div className='md:w-[85%] mx-auto pt-24'>
            <div className='className="mt-12o grid container gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"'>
                <article className='text-lg p-3 font-bold border-2 rounded-md shadow-lg'>
                    <h1 className='text-2xl mb-5'>Difference Between JavaScript and NodeJS?</h1>
                    <p><span className='text-2xl  text-orange-500'>NodeJs:</span> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>

                    <p><span className='text-2xl  text-orange-500'>JavaScript:</span> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </article>

                <article className='text-lg p-3 font-bold border-2 rounded-md shadow-lg'>
                    <h1 className='text-2xl mb-5'>When should you use nodeJs and when should you use mongodb?</h1>
                    <p><span className='text-2xl  text-orange-500'>Nodejs:</span>  নোড জেএস মূলত নন ব্লকিং জাভাস্ক্রিপট রান টাইম । নোড জেএস এর এরকম ব্যবহার এর কারণে সার্ভার সাইড ল্যাংগুয়েজ হিসেবে ব্যবহরিত হয়। নোড জেএস এর ব্যপক ব্যবহার হলো রিয়েল টাইম এপ্লিকেশন বিল্ড এর ক্ষেত্রে। উদাহরণ সরূপ বলা যায় যে এপ্লিকেশন এর মধ্যে ইউজার খুব দ্রুত সার্ভারে রিকুয়েস্ট পাঠাই এবং সার্ভার দ্রুত ইউজারকে ডাটা প্রেরণ করে। যে সকল ক্ষেত্রে অনেক ডাটা নিয়ে কাজ করতে হয় এবং ডাটা প্রসেস করে রেজাল্ট প্রদান করা হয় সে সব কেইসে নোড জেএস ব্যবহার উত্তম নয়।
                    </p>

                    <p><span className='text-2xl  text-orange-500'>MongoDB:</span> মংগোডিবি আমরা ব্যবহার করবো যখন আমাদের ডাটা ডকুমেন্ট কেন্দ্রিক এবং রিলেশনাল ডাটাবেসের স্কিমার সাথে ভালভাবে ফিট করে না। যখন আমাকে বিশাল স্কেল মিট্মাট করতে হবে এবং যখন আমি দ্রুত প্রোটোটাইপ করবো এই সব ক্ষেত্রে মংগোডিবি ডাটাবেইস ইউজ করা ভাল এবং প্রায় সকলেই এইটা করে থাকে।</p>
                </article>

                <article className='text-lg p-3 font-bold border-2 rounded-md shadow-lg'>
                    <h1 className='text-2xl mb-5'>What is the purpose of jwt and how does it work
                    </h1>
                    <p><span className='text-2xl  text-orange-500'>Ans:</span>  jwt হলো একধরনের টোকেন যা ক্লায়েন্ট এবং সার্ভার এর মধ্যে ডাটা আদান প্রদান এর সময় সিকিউরিটি বৃদ্ধি করতে ব্যবহার করা হয়। এর মাধ্যমে সার্ভার যাচাই করে যে ডাটার জন্য রিকুয়েস্ট পাঠিয়েছে সে কি আসল ক্লায়েন্ট কিনা আমি সঠিক ব্যক্তিকে ডাটা প্রেরণ করছি কিনা। এটার কার্যপ্রণালি হলো ইউজার যখন লগ ইন করে এই টোকেন এর একটা কপি ইউজার এর ব্রাউজারে সেইভ থাকে এবং আরেক কপি ডাটাবেইস এ সেইব থাকে। প্রতিবার ইউজার যখন ডাটার জন্য রিকুয়েস্ট পাঠায় তখন সাথে টোকেন ও পাঠানো হয় সার্ভার টোকেন এর সাথে মিলিয়ে দেখে টোকেন ঠিক আছে কিনা ঠিক থাকলে ডাটা প্রেরণ করে এবং ভুল হলে এরর ম্যাসেজ পাঠিয়ে দেই। কোন সময় এই টোকেন এর মেয়াদ শেষ হয়ে গেলে নতুন করে টোকেন জেনারেট করা হয়।</p>
                </article>

                <article className='text-lg p-3 font-bold border-2 rounded-md shadow-lg'>
                    <h1 className='text-2xl mb-5'>Difference Between Sql and NoSql database?</h1>
                    <p><span className='text-2xl  text-orange-500'>SQL:</span> Structured Query language (SQL)        pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.SQL programming can be effectively used to insert, search, update, delete database records.
                        That doesn't mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.
                        Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL
                    </p>

                    <p><span className='text-2xl  text-orange-500'>NoSql:</span> NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.
                     NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.
                     Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;