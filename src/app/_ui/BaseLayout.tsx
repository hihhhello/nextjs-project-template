import { classNames } from 'hihhhello-utils';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

import { NEXT_AUTH_OPTIONS } from '@/shared/utils/nextAuth';

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = async ({ children }: BaseLayoutProps) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const isSignedInUser = Boolean(session?.user);

  /**
   * Layout is created for max responsiveness. Adjust spacing and padding as per your design.
   * h-full, flex + flex-grow, overflow-hidden are used to make responsive scrolling without setting fixed height for containers.
   * TODO: Remove this comment.
   */
  return (
    <div className="h-full bg-white sm:bg-main-paper">
      <div className="flex h-full">
        {isSignedInUser && <>{/* Paste Sidebar Here */}</>}

        <div
          className={classNames(
            'flex w-full',
            isSignedInUser && 'sm:pl-[112px]',
          )}
        >
          <div className="flex flex-1 flex-col p-6 overflow-hidden">
            {isSignedInUser && <>{/* Paste Navbar Here */}</>}

            <main className="container mx-auto flex flex-grow overflow-hidden bg-white sm:rounded-[40px]">
              <div className="flex overflow-hidden flex-1 sm:p-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
