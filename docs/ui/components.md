# Components

`sorokit-ui` provides 70+ ready-to-use React components for wallet connection, account display, transactions, Soroban contract interaction, and DeFi workflows.

All components are unstyled by default and accept a `className` prop for full customization with Tailwind, CSS Modules, or any styling approach.

## Component Categories

### Wallet & Connection

- `WalletConnectButton` - Connect or disconnect wallets
- `WalletConnectModal` - Wallet selection and connection modal
- `WalletStatusBadge` - Display wallet connection status
- `AddressDisplay` - Render and format addresses with copy button

### Account Management

- `AccountCard` - Account summary information
- `AccountBalanceChart` - Visual balance history
- `AccountSidebar` - Account info sidebar
- `ActivityTimeline` - Transaction activity visualization
- `BalanceList` - List of account balances
- `AssetBadge` - Asset code and badge
- `AssetFilter` - Filter and search assets
- `ClaimableBalanceCard` - Claimable balance display

### Transactions

- `TransactionHistory` - Recent transactions
- `TransactionHistoryTable` - Enhanced transaction table
- `TransactionPanel` - Build and submit transactions
- `TransactionStatusTracker` - Real-time transaction status
- `TransactionFeeCalculator` - Fee calculation UI
- `TransactionConfirmModal` - Confirmation dialog
- `BatchPaymentProcessor` - Batch payment interface
- `MultiSigTransactionBuilder` - Multi-signature transaction UI
- `FeeEstimator` - Fee estimation component
- `QRCode` - QR code rendering

### Soroban & Contracts

- `SorobanPanel` - Full contract interaction experience
- `SorobanInvokeButton` - Contract invocation button
- `ContractEventFeed` - Contract event stream display
- `ContractInteractionBuilder` - Visual contract interaction builder
- `ContractInteractionDebugger` - Contract call debugger

### DeFi

- `SwapSimulator` - Swap preview and simulation
- `SwapExecutionTracker` - Swap execution monitoring
- `SwapRoute` - Swap route visualization
- `PortfolioRebalancer` - Portfolio rebalancing UI
- `RebalancerHistory` - Rebalancing history view
- `GasOptimizer` - Gas optimization interface
- `AllowanceManager` - Token allowance management

### Staking & Rewards

- `StakingDashboard` - Staking overview and management
- `RewardsPanel` - Rewards display
- `RewardHistory` - Historical rewards tracking
- `DelegationRow` - Individual delegation management

### Governance

- `GovernanceDashboard` - Voting and governance interface

### Validators

- `ValidatorCard` - Validator information display
- `ValidatorSearch` - Validator search and discovery

### NFT Management

- `NFTGallery` - NFT collection display and browsing

### Network

- `NetworkBanner` - Display active network context
- `NetworkSwitcher` - Switch between networks

### Layout

- `Sidebar` - App navigation sidebar
- `TopBar` - Top navigation bar

### Screens (Full Pages)

- `Dashboard` - Main dashboard screen
- `BudgetScreen` - Budget management interface
- `ChartingScreen` - Charts and analytics
- `RecoveryScreen` - Account recovery UI
- `YieldFarmingScreen` - Yield farming dashboard
- `NFTScreen` - Complete NFT management

### UI Primitives

- `Badge` - Status or label badge
- `Button` - Flexible button
- `Card` - Surface container
- `Input` - Text input
- `Separator` - Horizontal divider
- `Skeleton` - Loading placeholder
- `Toast` - Toast notifications
- `Tooltip` - Tooltip overlay
- `InfoCell` - Labeled info display
- `LabelledValue` - Labeled value component
- `PieChart` - Pie chart visualization

### Error Handling

- `ErrorBoundary` - Error boundary for React components

## Component Documentation Pattern

Each component page includes:

- **Purpose** - What the component does
- **Import path** - How to import it
- **Basic example** - Simple usage
- **Props** - All properties and types
- **Accessibility notes** - WCAG compliance info
- **Composition examples** - How to combine with other components

## Provider Setup

All components work within `SorokitProvider`:

```tsx
import { SorokitProvider } from "sorokit-ui";

<SorokitProvider network="testnet">
  {/* All components accessible here */}
</SorokitProvider>;
```

## Categories

| Category      | Components                                                 | Purpose                             |
| ------------- | ---------------------------------------------------------- | ----------------------------------- |
| **Providers** | SorokitProvider                                            | App-level context and configuration |
| **Controls**  | Buttons, inputs, selectors, toggles, filters               | User input and selection            |
| **Feedback**  | Badge, Toast, ErrorBoundary, TransactionStatusTracker      | Status and error states             |
| **Workflow**  | SorobanPanel, TransactionPanel, ContractInteractionBuilder | Higher-level sorokit interactions   |
| **Display**   | Cards, Lists, Charts, Tables, Timeline                     | Information visualization           |
| **DeFi**      | Swap*, Portfolio*, Gas*, Allowance*                        | DeFi-specific workflows             |
| **NFT**       | NFTGallery, NFTScreen                                      | NFT management                      |
| **Staking**   | StakingDashboard, RewardsPanel, DelegationRow              | Staking workflows                   |
