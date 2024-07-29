export default function Container({ children }) {
    return (
        <section className='bg-gray-100 w-full flex justify-center'>
            <div className="flex flex-col gap-y-3 bg-blue-100">
                {children}
            </div>
        </section>
    )
}