import { ReactNode, createContext, useContext, useState } from 'react'
import { cx, cva } from 'class-variance-authority'

type ReturnUseTabs = ReturnType<typeof useTabs>

const TabsContext = createContext<ReturnUseTabs>({} as ReturnUseTabs)
export const useTabsContext = () => useContext(TabsContext)

// USE TABS

export function useTabs({ tabKey: tabKeyProp }: { tabKey: string }) {
  const [tabKey, setTabKey] = useState(tabKeyProp)

  return {
    tabKey,
    setTabKey
  }
}

// TABS ROOT

type TabsRootProps = {
  children: ReactNode
} & ReturnUseTabs

export function TabsRoot({ children, ...useStepperProps }: TabsRootProps) {
  return <TabsContext.Provider value={useStepperProps}>{children}</TabsContext.Provider>
}

// TABS CONTENT

type TabsContentProps = {
  children: ReactNode
  tabKey: ReturnUseTabs['tabKey']
}

export function TabsContent({ children, tabKey: tabKeyProp }: TabsContentProps) {
  const { tabKey } = useTabsContext()

  if (tabKey !== tabKeyProp) {
    return null
  }

  return <>{children}</>
}

// TABS LIST

type TabsListProps = {
  children: ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={cx('flex w-full items-center justify-center shadow-md', className)}>
      {children}
    </div>
  )
}

// TABS TRIGGER

const tabsTriggerStyles = cva(
  'text-sm relative p-3 border-b border-b-1 border-b-neutral-600 disabled:cursor-not-allowed',
  {
    variants: {
      isSelected: {
        true: "text-black after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-black"
      },
      isDisabled: {
        true: 'text-neutral-500'
      }
    },
    compoundVariants: [
      {
        isSelected: false,
        class: 'text-neutral-600'
      }
    ],
    defaultVariants: {
      isSelected: false
    }
  }
)

type TabsTriggerProps = {
  children: ReactNode
  className?: string
  isDisabled?: boolean
  tabKey: ReturnUseTabs['tabKey']
}

export function TabsTrigger({
  children,
  className,
  tabKey: tabKeyProp,
  isDisabled
}: TabsTriggerProps) {
  const { tabKey, setTabKey } = useTabsContext()
  const isSelected = tabKey === tabKeyProp

  function handleClick() {
    if (isDisabled) {
      return
    }

    setTabKey(tabKeyProp)
  }

  return (
    <button
      className={cx(tabsTriggerStyles({ isSelected, isDisabled }), className)}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
