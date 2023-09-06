import React from 'react';

const AccountSummary = () => {
  return (
    <div style={{margin: '30px'}}>
      <div className='max-w-4xl mx-auto mb-12 text-center'>
        <h3 className='mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter'>Total Income/Expenses of All Accounts</h3>
        <p className='text-lg md:text-xl text-coolGray-500 font-medium'>A list of your accounts, either separated by category or in chronological order.</p>
      </div>
      <section className='bg-coolGray-50 py-4'>
        <div className='container px-4 mx-auto'>
          <div className='flex flex-wrap -m-3'>
            <div className='w-full md:w-1/3 p-3'>
              <div className='p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard'>
                <div className='flex flex-wrap items-end justify-between -m-2 mb-2'>
                  <div className='w-auto p-2'>
                    <h3 className='text-sm text-coolGray-500 font-medium'>Total Income</h3>
                  </div>
                  <div className='w-auto p-2'>
                  </div>
                </div>
                <div className='flex flex-wrap items-center justify-between -m-1'>
                  <div className='w-auto p-1'>
                    <h2 className='font-medium text-3xl text-black tracking-tighter'>₹ 0</h2>
                  </div>
                  <div className='w-auto p-1'>
                    <div className='flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm'>
                      <svg width={12} height={12} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z'
                          fill='#22C55E'
                        />
                      </svg>
                      <p>0%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-3'>
              <div className='p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard'>
                <div className='flex flex-wrap items-end justify-between -m-2 mb-2'>
                  <div className='w-auto p-2'>
                    <h3 className='text-sm text-coolGray-500 font-medium'>Todays Expenses</h3>
                  </div>
                  <div className='w-auto p-2'>
                  </div>
                </div>
                <div className='flex flex-wrap items-center justify-between -m-1'>
                  <div className='w-auto p-1'>
                    <h2 className='font-medium text-3xl text-black tracking-tighter'>0</h2>
                  </div>
                  <div className='w-auto p-1'>
                    <div className='flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm'>
                      <svg width={12} height={12} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z'
                          fill='#22C55E'
                        />
                      </svg>
                      <p>0%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-3'>
              <div className='p-8 bg-white border border-coolGray-100 rounded-md shadow-dashboard'>
                <div className='flex flex-wrap items-end justify-between -m-2 mb-2'>
                  <div className='w-auto p-2'>
                    <h3 className='text-sm text-coolGray-500 font-medium'>Balance</h3>
                  </div>
                  <div className='w-auto p-2'>
                  </div>
                </div>
                <div className='flex flex-wrap items-center justify-between -m-1'>
                  <div className='w-auto p-1'>
                    <h2 className='font-medium text-3xl text-black tracking-tighter'>₹ 0</h2>
                  </div>
                  <div className='w-auto p-1'>
                    <div className='flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm'>
                      <svg width={12} height={12} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8.855 5.64501L6.355 3.14501C6.30745 3.09949 6.25138 3.06381 6.19 3.04001C6.06827 2.99 5.93173 2.99 5.81 3.04001C5.74863 3.06381 5.69255 3.09949 5.645 3.14501L3.145 5.64501C3.09838 5.69163 3.0614 5.74697 3.03617 5.80788C3.01094 5.8688 2.99796 5.93408 2.99796 6.00001C2.99796 6.13316 3.05085 6.26086 3.145 6.35501C3.23915 6.44916 3.36685 6.50206 3.5 6.50206C3.63315 6.50206 3.76085 6.44916 3.855 6.35501L5.5 4.70501V8.50001C5.5 8.63262 5.55268 8.7598 5.64645 8.85356C5.74022 8.94733 5.86739 9.00001 6 9.00001C6.13261 9.00001 6.25979 8.94733 6.35355 8.85356C6.44732 8.7598 6.5 8.63262 6.5 8.50001V4.70501L8.145 6.35501C8.19148 6.40187 8.24678 6.43907 8.30771 6.46446C8.36864 6.48984 8.434 6.50291 8.5 6.50291C8.56601 6.50291 8.63136 6.48984 8.69229 6.46446C8.75322 6.43907 8.80852 6.40187 8.855 6.35501C8.90186 6.30853 8.93906 6.25323 8.96445 6.1923C8.98983 6.13137 9.0029 6.06602 9.0029 6.00001C9.0029 5.934 8.98983 5.86865 8.96445 5.80772C8.93906 5.74679 8.90186 5.69149 8.855 5.64501Z'
                          fill='#22C55E'
                        />
                      </svg>
                      <p>0%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSummary;
